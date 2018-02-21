// TODO: Edit this interface for specific uses

export interface Pizza extends HasId {
  type: PizzaType,
  size: number,
  toppings: Topping[]
}

export interface Topping extends HasId {
  name: string,
  pizzaId: UUID
}

export enum PizzaType {
  cheese,
  red,
  white
}

export type UUID = string
export type Seed<T extends HasId> = T | string

export interface HasId { id: string }
export type WithoutId<T extends HasId> = Omit<T, 'id'>
