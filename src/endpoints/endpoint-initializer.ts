import { Method, Request, Server } from 'vineyard-lawn'
import { Village } from '../village'
import { UserManager, UserService } from 'vineyard-users'
import { userRequestHandler } from './request-handlers/user-request-handlers'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  const validators = server.compileApiSchema(require('../endpoints/request-validation.json'))
  const userManager = new UserManager()
  const userService = new UserService(server.getApp(), )

  // Creates public endpoints
  server.createEndpoints(emptyPreprocessor, [
    {
      method: Method.post,
      path: 'user/login',
      action: userRequestHandler.loginUser,
      validator: validators.loginUser
    },

    {
      method: Method.
    }
  ])
}
