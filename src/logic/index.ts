import { PizzaLogic } from './pizza-logic'
import { Model } from '../model/index'
import { FullConfig } from '../../config/config-types'

export interface Logic {
  pizzaLogic: PizzaLogic
}

export function createLogic (model: Model, config: FullConfig): Logic {
  return {
    pizzaLogic: new PizzaLogic(model.Pizza, config.pizzaPrices)
  }
}
