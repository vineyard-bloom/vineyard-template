import { fmap, pizzaToApiPizza } from './mapping-helpers'
import { Logic } from '../logic/logic'
import { ApiContract } from './generated/api-contract'

export function implementApiContract (logic: Logic): ApiContract {
  const { pizzaLogic } = logic
  return {
    createPizza: (req) => pizzaLogic.createPizza(req.data).then(pizzaToApiPizza),
    getPizza: (req) => pizzaLogic.getPizza(req.data.pizzaId).then(pizzaToApiPizza),
    indexPizza: (req) => pizzaLogic.indexPizza().then(fmap(pizzaToApiPizza))
  }
}