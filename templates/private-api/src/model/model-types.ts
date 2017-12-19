
export type Id = string

export interface NewPizza {
  name: string
  size: number
}

export interface Pizza extends NewPizza {
  id: Id
}
