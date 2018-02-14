import {PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"
import { Id, NewPizza } from "../model-types"
import { Entity } from "typeorm/decorator/entity/Entity"

export abstract class OrmRecord {
  @PrimaryGeneratedColumn('uuid')
  id: Id

  @CreateDateColumn()
  created: Date

  @UpdateDateColumn()
  modified: Date
}

@Entity({name: 'pizzas'})
export class PizzaRecord extends OrmRecord {
  @Column()
  name: string

  @Column()
  size: number

  static createFromNewPizza(input: NewPizza): PizzaRecord {
    let result = new PizzaRecord()
    result.name = input.name
    result.size = input.size
    return result
  }
}

@Entity({name: 'pies'})
export class PieRecord extends OrmRecord {
  @Column()
  pieName: string

  @Column()
  pieces: number
}
