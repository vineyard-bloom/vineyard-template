require('source-map-support').install()
import {WebClient} from "vineyard-lawn/lab"
import {createVillage, Village} from "../../src/village"
import {startApiServer} from "../../src/api/api-server"
import "reflect-metadata"
import {Pizza} from "../../src/model"
import {assert} from "chai"
import {Server} from "vineyard-lawn"

let village: Village
let server:Server

describe('pizza test', function () {

  before(async function () {
    village = await createVillage()
    server = await startApiServer(village)
  })

  it('creates and gets pizzas', async function () {
    const client = new WebClient('http://localhost:3000')
    const newPizza:Pizza = await client.post('pizza', {
      name: 'Pepperoni Pizza',
      size: 10,
    })

    const previousPizza = await client.get('pizza/' + newPizza.id) as Pizza
    assert.isObject(previousPizza)
    assert.strictEqual(previousPizza.name, 'Pepperoni Pizza')
    assert.strictEqual(previousPizza.size, 10)
  })

  after(async function() {
    return server.stop()
  })
})