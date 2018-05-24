import * as assert from 'assert'
import { startApiServer } from '../../src/api/api-server'
import { Server } from 'vineyard-lawn/source/server'
import { assertEqualByData } from '../helpers/custom-assertions'
import { randomCreatePizzaData, randomPizzaToCreate } from '../../fixtures/random-types'
import { createVillage, Village } from '../../src/village'
import { DevModeler } from 'vineyard-ground/source/modeler'
import Axios from 'axios'
import { PizzaCollection } from '../../src/model/model'
import { Pizza, PizzaType } from '../../src/model/model-types'
import { Omit } from 'vineyard-data/src/core-types'
import { arrayOfRandom, getRandomIntInclusive } from '../../fixtures/random-helpers'
import { testConfig } from '../../config/config-test'
import { pizzaToApiPizza } from '../../src/endpoints/mapping-helpers'

// Internal functional tests should run without touching any live backing service (bitcoind, geth, etc) except the db.
// They should be at an "integration" level, often an http request to an api endpoint or equivalently high level functionality.
describe('pizza end 2 end', function () {
  let server: Server
  let rootUrl: string
  let village: Village
  let pizzaCollection: PizzaCollection

  before(async () => {
    village = createVillage(testConfig)
    server = await startApiServer(village)
    rootUrl = `http://localhost:${server.getPort()}/v1/`
    pizzaCollection = village.model.Pizza
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
    const pizzaToCreate = randomPizzaToCreate()
    const createdPizza = await pizzaCollection.create(pizzaToCreate)

    const retrievedPizza = (await Axios.get(rootUrl + 'pizza', { params: { pizzaId: createdPizza.id } })).data
    assertEqualByData(pizzaToApiPizza(createdPizza), retrievedPizza)
  })

  it('indexes pizzas', async function () {
    const totalPizzasToCreate = getRandomIntInclusive(0, 3)
    const pizzasToCreate = arrayOfRandom(totalPizzasToCreate, randomPizzaToCreate)
    await Promise.all(pizzasToCreate.map(async p => await pizzaCollection.create(p)))

    const indexedPizzas = (await Axios.get(rootUrl + 'pizzas')).data
    assert.equal(pizzasToCreate.length, indexedPizzas.length)
  })
})
