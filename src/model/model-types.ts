import { UUID } from 'vineyard-data/modern'

export interface Pizza {
  id: UUID,
  type: PizzaType,
  size: number,
  price: number
}

export enum PizzaType {
  cheese,
  red,
  white
}

