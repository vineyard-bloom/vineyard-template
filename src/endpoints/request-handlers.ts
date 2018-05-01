import { CreatePizzaRequest, CreatePizzaResponse, GetPizzaRequest, GetPizzaResponse } from './endpoint-types'
import { PizzaLogic } from '../logic/pizza-logic'
import { mapPizzaToApiPizza } from './mapping-helpers'

export function createPizza (pizzaLogic: PizzaLogic, req: CreatePizzaRequest): Promise<CreatePizzaResponse> {
  return pizzaLogic.createPizza(req.data).then(mapPizzaToApiPizza)
}

export function getPizza (pizzaLogic: PizzaLogic, req: GetPizzaRequest): Promise<GetPizzaResponse> {
  return pizzaLogic.getPizza(req.data.pizzaId).then(mapPizzaToApiPizza)
}
