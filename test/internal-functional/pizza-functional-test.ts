import * as assert from 'assert'
import { startApiServer } from '../../src/api/api-server'
import { Server } from 'vineyard-lawn/source/server'
import { assertEqualByData } from '../helpers/custom-assertions'
import { randomCreatePizzaData } from '../../fixtures/random-types'
import { createVillage, Village } from '../../src/village'
import { DevModeler } from 'vineyard-ground/source/modeler'
import Axios from 'axios'

// Internal functional tests should run without touching any live backing service (bitcoind, geth, etc) except the db.
// They should be at an "integration" level, often an http request to an api endpoint or equivalently high level functionality.
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
    await (village.model.ground as any as DevModeler).regenerate()
  })

  after(async () => {
    server.stop()
  })

  it('creates a pizza', async function () {
    const pizzaToCreate = randomCreatePizzaData()
    const createdPizza = (await Axios.post(rootUrl + 'pizza', pizzaToCreate)).data

    assertEqualByData(pizzaToCreate, createdPizza, ['price', 'type'])
    assert(createdPizza.price)
    assert(createdPizza.type)
    assert(createdPizza.id)
  })

  it('gets a pizza', async function () {
    const pizzaToCreate = randomCreatePizzaData()
    const createdPizza = (await Axios.post(rootUrl + 'pizza', pizzaToCreate)).data

    const retrievedPizza = (await Axios.get(rootUrl + 'pizza', { params: { pizzaId: createdPizza.id } })).data
    assertEqualByData(retrievedPizza, createdPizza)
  })
})
