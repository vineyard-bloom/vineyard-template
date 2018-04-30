import * as assert from 'assert'
import { startApiServer } from '../../../src/api/api-server'
import { Server } from 'vineyard-lawn/source/server'
import { assertEqualByData } from '../../helpers/custom-assertions'
import { randomCreatePizzaData } from '../../../fixtures/random-types'
import { createVillage, Village } from '../../../src/village'
import { DevModeler } from 'vineyard-ground/source/modeler'

const request = require('request-promise')

describe('pizza end 2 end', function () {
  let server: Server
  let rootUrl: string
  let village: Village

  before(async () => {
    village = createVillage()
    server = await startApiServer(village)
    rootUrl = `http://localhost:${server.getPort()}/v1/`
  })

  beforeEach(async () => {
    await (village.model as any as DevModeler).regenerate()
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
    assertEqualByData(pizzaToCreate, createdPizza, ['price', 'type'])
    assert(createdPizza.price)
    assert(createdPizza.type)
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
