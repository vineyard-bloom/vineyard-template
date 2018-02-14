import { Server, Method, Request } from "vineyard-lawn"
import { UserRequestHandler } from "../request-handlers/user-request-handler"
import { Village } from "../village"

export function initializeEndpoints(server: Server, village: Village){
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  const userRequestHandler: UserRequestHandler = village.requestHandlers.userRequestHandler

  server.createEndpoints(emptyPreprocessor, [
    {
      method: Method.post,
      path: "user",
      action: userRequestHandler.createUser
    },

    {
      method: Method.get,
      path: "user",
      action: userRequestHandler.getUser
    }
  ])
}