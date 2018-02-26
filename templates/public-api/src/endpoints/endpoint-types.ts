import { Request } from 'vineyard-lawn'
import { PizzaType, UUID } from '../model/model-types'

export interface CreatePizzaRequest extends Request {
  data: {
    type: PizzaType,
    size: number
  }
}
export type CreatePizzaResponse = ApiPizza

export interface GetPizzaRequest extends Request {
  data: {
    pizzaId: UUID
  }
}
export type GetPizzaResponse = ApiPizza

export interface ApiPizza {
  id: UUID
  type: PizzaType,
  size: number,
  price: number
}

export interface EmptyRequest extends Request {
  readonly data: Empty
}

export interface Empty {
  _?: undefined
}
