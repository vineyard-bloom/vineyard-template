import { UserLogic } from "./user-logic"
import { PizzaDao } from "../model/dao/user-dao"
import { Model } from "../model/index"

export interface Logic {
  userLogic: UserLogic
}

export function createLogic(model: Model): Logic {
  const userDao = new PizzaDao(model.User)

  return {
    userLogic: new UserLogic(userDao)
  }
}
