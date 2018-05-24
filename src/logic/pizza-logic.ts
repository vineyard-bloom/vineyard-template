import { Pizza, PizzaType } from '../model/model-types'
import { Omit, UUID } from 'vineyard-data/src/core-types'
import { PizzaCollection } from '../model/model'

export class PizzaLogic {
  private readonly pizzaCollection: PizzaCollection
  private readonly pizzaPrices: Map<PizzaType, number>

  constructor (pizzaCollection: PizzaCollection, pizzaPrices: Map<PizzaType, number>) {
    this.pizzaCollection = pizzaCollection
    this.pizzaPrices = pizzaPrices
  }

  async createPizza (createPizzaData: CreatePizzaData): Promise<Pizza> {
    const { type, size } = createPizzaData
    const pizzaToCreate = {
      type,
      size,
      price: this.calculatePrice(type, size)
    }
    return this.pizzaCollection.create(pizzaToCreate)
  }

  async getPizza (pizzaId: UUID): Promise<Pizza> {
    return this.pizzaCollection.get(pizzaId)
  }

  async indexPizza (): Promise<Pizza[]> {
    return this.pizzaCollection.all()
  }

  calculatePrice (type: PizzaType, size: number): number {
    const pricePerSlice = this.pizzaPrices.get(type) || 0
    return pricePerSlice * size
  }
}

export type CreatePizzaData = Omit<Pizza, 'price' | 'id'>
