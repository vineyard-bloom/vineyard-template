import { Request } from 'vineyard-lawn'
import { UUID } from 'vineyard-data/src/core-types'
import { CreatePizzaData } from '../logic/pizza-logic'

export interface CreatePizzaRequest extends Request {
  data: CreatePizzaData
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
  type: string,
  size: number,
  price: number
}

export interface EmptyRequest extends Request {
  readonly data: Empty
}

export interface Empty {
  _?: undefined
}
