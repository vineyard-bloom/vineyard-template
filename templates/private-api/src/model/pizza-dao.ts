import {Id, NewPizza, Pizza} from "./model-types"
import {Entity, PrimaryGeneratedColumn, Column, Repository, Connection} from "typeorm"
import {PizzaRecord} from "./entities/pizza";

export class PizzaDao {
  repo: Repository<PizzaRecord>

  constructor(connection: Connection) {
    this.repo = connection.getRepository(PizzaRecord)
  }

  async createPizza(pizzaSeed: NewPizza): Promise<Pizza> {
    const pizza = PizzaRecord.createFromNewPizza(pizzaSeed)
    await this.repo.save(pizza)
    return pizza
  }

  async getPizza(id: string): Promise<Pizza | undefined> {
    return this.repo.findOneById(id)
  }

  async deletePizza(id: string) {
    return this.repo.deleteById(id)
  }

  async updatePizza(id: string, fields: Partial<Pizza>) {
    return this.repo.updateById(id, fields)
  }
}
