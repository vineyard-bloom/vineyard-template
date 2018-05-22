// TODO: Edit this interface for specific uses
import { UUID } from 'vineyard-data/src/core-types'

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
