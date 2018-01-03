import {localConfig} from "../config/config-sample"
import {PizzaLogic} from "./logic/pizza-logic"
import {Connection} from "typeorm"
import {PizzaDao} from "./model/pizza-dao"
import {createDatabaseConnection} from "./model"
import {FullConfig} from "./config-types"

export interface Logic {
  pizzaLogic: PizzaLogic
}

export interface Village {
  config: FullConfig
  databaseConnection: Connection
  logic: Logic
}

function createLogic(connection: Connection): Logic {
  const pizzaDao = new PizzaDao(connection)

  return {
    pizzaLogic: new PizzaLogic(pizzaDao)
  }
}

export async function createVillage(): Promise<Village> {
  const connection = await createDatabaseConnection(localConfig.database)

  return {
    config: localConfig,
    databaseConnection: connection,
    logic: createLogic(connection)
  }
}