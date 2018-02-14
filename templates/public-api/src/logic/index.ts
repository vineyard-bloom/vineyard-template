import { UserLogic } from "./user-logic"
import { UserDao } from "../model/dao/user-dao"
import { Model } from "../model/index"

export interface Logic {
  userLogic: UserLogic
}

export function createLogic(model: Model): Logic {
  const userDao = new UserDao(model.User)

  return {
    userLogic: new UserLogic(userDao)
  }
}
