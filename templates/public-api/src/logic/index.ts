import { PizzaLogic } from './pizza-logic'
import { PizzaDao } from '../model/dao/pizza-dao'
import { Model } from '../model/index'
import { FullConfig } from '../../config/config-types'

export interface Logic {
  pizzaLogic: PizzaLogic
}

export function createLogic (model: Model, config: FullConfig): Logic {
  const pizzaDao = new PizzaDao(model.Pizza)

  return {
    pizzaLogic: new PizzaLogic(pizzaDao, config.pizzaPrices)
  }
}
