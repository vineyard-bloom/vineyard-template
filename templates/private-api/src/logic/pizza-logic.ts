import {PizzaDao} from "../model/pizza-dao";
import {NewPizza, Pizza} from "../model/model-types";
import {BadRequest} from "vineyard-lawn/source/errors";

export class PizzaLogic {
  pizzaDao: PizzaDao

  constructor(pizzaDao: PizzaDao) {
    this.pizzaDao = pizzaDao;
  }

  async createPizza(pizzaSeed: NewPizza): Promise<Pizza> {
    return this.pizzaDao.createPizza(pizzaSeed)
  }

  async getPizza(id: string): Promise<Pizza> {
    const pizza = await this.pizzaDao.getPizza(id)
    if (!pizza)
      throw new BadRequest('There is no pizza with that id')

    return pizza
  }

  async deletePizza(id: string) {
    return this.pizzaDao.deletePizza(id)
  }

  async updatePizza(id: string, fields: Partial<NewPizza>) {
    return this.pizzaDao.updatePizza(id, fields)
  }
}