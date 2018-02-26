import { configurePizzaRequestHandler, PizzaRequestHandler } from './pizza-request-handler'
import { Logic } from '../logic/index'

export interface RequestHandlers {
  pizzaRequestHandler: PizzaRequestHandler
}

export function createRequestHandlers (logic: Logic): RequestHandlers {
  return {
    pizzaRequestHandler: configurePizzaRequestHandler(logic.pizzaLogic)
  }
}
