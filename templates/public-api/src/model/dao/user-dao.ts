import { Collection } from 'vineyard-ground'
import { Pizza, Seed, Topping, WithoutId } from '../model-types'
import { throwIfUndefined } from '../model-helpers'

export class PizzaDao {
  private readonly pizzaCollection: Collection<Pizza>
  private readonly toppingCollection: Collection<Topping>

  constructor (pizzaCollection: Collection<Pizza>, toppingCollection: Collection<Topping>) {
    this.pizzaCollection = pizzaCollection
    this.toppingCollection = toppingCollection
  }

  async createPizza (pizzaToCreate: WithoutId<Pizza>, toppings: WithoutId<Topping>[]): Promise<Pizza> {
    const createdPizza = await this.pizzaCollection.create(pizzaToCreate)

    const createdToppings = await Promise.all(toppings.map(async (toppingToCreate) => {
      toppingToCreate.pizzaId = createdPizza.id
      return this.toppingCollection.create(toppingToCreate)
    }))

    createdPizza.toppings = createdToppings
    return createdPizza
  }

  async getPizza (seed: Seed<Pizza>): Promise<Pizza> {
    return this.retrievePizzaToppings(await this.pizzaCollection.get(seed).then(throwIfUndefined))
  }

  private async retrievePizzaToppings (pizza: Pizza): Promise<Pizza> {
    const pizzaToppings = await this.toppingCollection.filter({ pizzaId: pizza.id }).exec()
    pizza.toppings = pizzaToppings
    return pizza
  }
}
