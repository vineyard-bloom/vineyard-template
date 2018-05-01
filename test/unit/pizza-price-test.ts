import { createVillage } from '../../src/village'
import { FullConfig } from '../../config/config-types'
import { PizzaLogic } from '../../src/logic/pizza-logic'
import { getRandomEnumValue, getRandomIntInclusive } from '../../fixtures/random-helpers'
import { PizzaType } from '../../src/model/model-types'
import * as assert from 'assert'

// Unit tests should run without touching any live backing service (bitcoind, geth, etc) except possibly the db. Each it
// block should exercise a single small unit of code.
describe('pizza type', function () {
  let config: FullConfig
  let pizzaLogic: PizzaLogic

  before(async () => {
    const { config: villageConfig, logic } = createVillage()
    config = villageConfig
    pizzaLogic = logic.pizzaLogic
  })

  it('computes a pizza price', async function () {
    const price = pizzaLogic.calculatePrice(getRandomEnumValue(PizzaType), getRandomIntInclusive(1, 6))
    assert(price > 0)
  })
})
