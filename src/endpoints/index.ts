import { Logic } from '../logic/index'
import { ApiContract } from './api-contract'
import { mapPizzaToApiPizza } from './mapping-helpers'

export function instantiateApiContract(logic: Logic): ApiContract {
  const { pizzaLogic } = logic
  return {
    createPizza: (req) => pizzaLogic.createPizza(req.data).then(mapPizzaToApiPizza),
    getPizza: (req) => pizzaLogic.getPizza(req.data.pizzaId).then(mapPizzaToApiPizza)
  }
}