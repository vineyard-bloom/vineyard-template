import { PizzaLogic } from '../logic/user-logic'
import { CreatePizzaRequest, CreatePizzaResponse, GetPizzaRequest, GetPizzaResponse } from '../endpoints/endpoint-types'
import { mapPizzaToApiPizza } from '../utility/mapping-helper'
import { Unauthorized, Request } from 'vineyard-lawn'

export interface PizzaRequestHandler {
  createPizza: (req: CreatePizzaRequest) => Promise<CreatePizzaResponse>
  getPizza: (req: GetPizzaRequest) => Promise<GetPizzaResponse>
}

export function configurePizzaRequestHandler (pizzaLogic: PizzaLogic) {
  return {
    createPizza : (req: Request) => createPizza(pizzaLogic, req),
    getPizza : (req: Request) => getPizza(pizzaLogic, req)
  }
}

export const createPizza: (pizzaLogic: PizzaLogic, req: CreatePizzaRequest) => Promise<CreatePizzaResponse> =
  async (pizzaLogic, req) => {
    const createdPizza = await pizzaLogic.createPizza(req.data)
    return mapPizzaToApiPizza(createdPizza)
  }

export const getPizza: (pizzaLogic: PizzaLogic, req: GetPizzaRequest) => Promise<GetPizzaResponse> =
  async (pizzaLogic, req) => {
    const retrievedPizza = await pizzaLogic.getPizza(req.data.pizzaId)
    return mapPizzaToApiPizza(retrievedPizza)
  }

// Auth is done at the request handler level
// export function getLoggedInUserId (req: Request): string {
//   const userId: string = req.session.user
//   if (userId) return userId
//   throw new Unauthorized()
// }
