import { PizzaLogic } from '../logic/pizza-logic'
import {
  ApiPizza, CreatePizzaRequest, CreatePizzaResponse, GetPizzaRequest,
  GetPizzaResponse
} from '../endpoints/endpoint-types'
import { Request } from 'vineyard-lawn'
import { Pizza } from '../model/model-types'

export interface PizzaRequestHandler {
  createPizza: (req: CreatePizzaRequest) => Promise<CreatePizzaResponse>
  getPizza: (req: GetPizzaRequest) => Promise<GetPizzaResponse>
}

export function configurePizzaRequestHandler (pizzaLogic: PizzaLogic): PizzaRequestHandler {
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

export function pullData<T extends Request> (t: T): Promise<T['data']> {
  return Promise.resolve(t.data)
}

export function mapPizzaToApiPizza (pizza: Pizza): Promise<ApiPizza> {
  const { id, size, price, type } = pizza
  return Promise.resolve({
    id,
    size,
    price,
    type: `pizza type: ${type.toString()}`
  })
}
