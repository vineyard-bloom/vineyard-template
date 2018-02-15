import { configureUserRequestHandler, UserRequestHandler } from "./user-request-handler"
import { Logic } from "../logic/index"

export interface RequestHandlers {
  userRequestHandler: UserRequestHandler
}

export function createRequestHandlers(logic: Logic): RequestHandlers {
  return {
    userRequestHandler: configureUserRequestHandler(logic.userLogic)
  }
}
