import { PizzaDao } from '../model/dao/user-dao'
import { Pizza, PizzaType, WithoutId } from '../model/model-types'
import { BadRequest } from 'vineyard-lawn/source/errors'

export class PizzaLogic {
  private readonly pizzaDao: PizzaDao
  private readonly pizzaPrices: Map<PizzaType, number>

  constructor (pizzaDao: PizzaDao, pizzaPrices: Map<PizzaType, number>) {
    this.pizzaDao = pizzaDao
    this.pizzaPrices = pizzaPrices
  }

  // TODO: edit two factor secret code
  async createPizza (createUserData: CreatePizzaData): Promise<Pizza> {
    const { type, size } = createUserData
    const pizzaToCreate: WithoutId<Pizza> = {
      type,
      size,
      price: this.calculatePrice(type, size)
    }
    return this.pizzaDao.createPizza(pizzaToCreate)
  }

  async getPizza (pizzaId: string): Promise<Pizza> {
    return this.pizzaDao.getPizza(pizzaId)
  }

  private calculatePrice (type: PizzaType, size: number): number {
    const pricePerSlice = this.pizzaPrices.get(type) || 0
    return pricePerSlice * size
  }
}

export type CreatePizzaData = Omit<WithoutId<Pizza>, 'price'>
