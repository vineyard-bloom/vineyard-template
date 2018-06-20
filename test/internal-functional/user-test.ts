import { getTwoFactorToken } from 'vineyard-users'
import * as assert from 'assert'
import { testConfig } from './../../config/config'
import { createUserFixture } from '../../fixtures'
import { createVillage } from '../../src/village'
import { startApiServer } from '../../src/api/api-server'
import { WebClient } from 'vineyard-lawn/lab'
import { DevModeler } from 'vineyard-ground'
import { User } from '../../src/model/model-types'
import { requestTypes } from '../../src/endpoints/request-handlers/api-types'

const testVillage = createVillage(testConfig)
const userLogic = testVillage.logic.user
const testServer = startApiServer(testVillage)
const testModel = testVillage.model
const testClient = new WebClient(`http://localhost:${testConfig.api.port}/1.0`)
const userFixture = require('../../fixtures/user-fixture.json')

/**
 * User endpoints:
 * POST ('user/login')
 * POST ('user')
 * POST ('user/logout')
 */

async function prepareLogin (): Promise<{ data: any, user: any}> {
  const userPassword = new String(userFixture.basicUser.password).toString()
  const user = await createUserFixture(userLogic, 'basicUser')
  const twoFactor = await getTwoFactorToken(user.twoFactorSecret)
  const loginData = {
    email: user.email,
    password: userPassword,
    twoFactor: twoFactor
  }
  return { data: loginData, user: user }
}

describe('User Endpoints', function () {
  beforeEach(async function () {
    await (testModel.ground as DevModeler).regenerate()
  })

  it(' can login a user', async function () {
    const loginData = await prepareLogin()
    const { data, user } = loginData
    await testClient.post('user/login', data)
    const loggedIn = await userLogic.isLoggedIn(user.id)
    return assert(loggedIn)
  })

  it(' can register a user', async function () {
    const userData = {
      email: 'toad@test.com',
      password: 'toad10!?',
      twoFactorSecret: 'longalphanumericsecretfor2fa'
    }
    await testClient.post('user', userData)
    const databaseUser = await userLogic.getUserByEmail(userData.email)
    assert(databaseUser.id)
    assert(databaseUser.email === userData.email)
    assert(databaseUser.password !== userData.password)
  })

  it(' can login and logout a user', async function () {
    const loginData = await prepareLogin()
    const { user, data } = loginData
    await testClient.post('user/login', data)
    const loggedIn = await userLogic.isLoggedIn(user.id)
    assert(loggedIn)
    await testClient.post('user/logout')
    const loggedInAgain = await userLogic.isLoggedIn(user.id)
    assert(!loggedInAgain)
  })
})
