import { Collection } from 'vineyard-ground'
import { Pizza, Seed, WithoutId } from '../model-types'
import { throwIfUndefined } from '../model-helpers'

export class PizzaDao {
  private readonly pizzaCollection: Collection<Pizza>

  constructor (pizzaCollection: Collection<Pizza>) {
    this.pizzaCollection = pizzaCollection
  }

  async createPizza (pizzaToCreate: WithoutId<Pizza>): Promise<Pizza> {
    return this.pizzaCollection.create(pizzaToCreate)
  }

  async getPizza (seed: Seed<Pizza>): Promise<Pizza> {
    return this.pizzaCollection.get(seed).then(throwIfUndefined)
  }
}
