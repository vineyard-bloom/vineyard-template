import * as assert from 'assert'
import { createUserFixture } from '../../fixtures'
import { createVillage } from '../../src/village'
import { testConfig } from '../../config/config'
import { DevModeler } from 'vineyard-ground'

const testVillage = createVillage(testConfig)
const userLogic = testVillage.logic.user
const testModel = testVillage.model

describe('User Logic', function () {
  beforeEach(async function () {
    await (testModel.ground as DevModeler).regenerate()
  })

  it(' can create and get a user', async function () {
    const createdUser = await createUserFixture(userLogic, 'basicUser')
    const gotUser = await userLogic.getUserById(createdUser.id)
    assert(createdUser.id && gotUser.id)
  })

  it(' can get a user by email', async function () {
    const createdUser = await createUserFixture(userLogic, 'basicUser')
    const gotUser = await userLogic.getUserByEmail(createdUser.email)
    assert(createdUser.id && gotUser.id)
  })
})
