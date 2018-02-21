import * as assert from 'assert'
const request = require('request-promise')
import { defaultVillage } from '../../setup/server-setup'
import { startApiServer } from '../../../src/api/api-server'
import { Server } from 'vineyard-lawn/source/server'
import { PizzaType } from '../../../src/model/model-types'
import { assertEqualByData } from '../../helpers/custom-assertions'
import { randomCreatePizzaData } from '../../../fixtures/random-types'

describe('pizza end 2 end', function () {
  const { village } = defaultVillage
  let server: Server
  let rootUrl: string

  before(async () => {
    server = await startApiServer(village)
    rootUrl = `http://localhost:${server.getPort()}/v1/`
  })

  after(async () => {
    server.stop()
  })

  it('creates a pizza', async function () {
    const pizzaToCreate = randomCreatePizzaData()
    const createPizzaOptions = {
      method: 'POST',
      uri: rootUrl + `pizza`,
      json: true,
      qs: {},
      body: pizzaToCreate
    }
    const createdPizza = await request(createPizzaOptions)
    assertEqualByData(pizzaToCreate, createdPizza, ['price'])
    assert(createdPizza.price)
    assert(createdPizza.id)
  })

  it('gets a pizza', async function () {
    const pizzaToCreate = randomCreatePizzaData()
    const createPizzaOptions = {
      method: 'POST',
      uri: rootUrl + `pizza`,
      json: true,
      body: pizzaToCreate
    }
    const createdPizza = await request(createPizzaOptions)

    const getPizzaOptions = {
      method: 'GET',
      uri: rootUrl + `pizza`,
      json: true,
      qs: { pizzaId: createdPizza.id }
    }
    const retrievedPizza = await request(getPizzaOptions)
    assertEqualByData(retrievedPizza, createdPizza)
  })
})
