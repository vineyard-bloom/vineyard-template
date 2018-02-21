import { PizzaLogic } from './user-logic'
import { PizzaDao } from '../model/dao/user-dao'
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
