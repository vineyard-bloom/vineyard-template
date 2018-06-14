import { Method, Request, Server } from 'vineyard-lawn'
import { Village } from '../village'
import { UserManager, UserService } from 'vineyard-users'
import { userRequestHandler } from './request-handlers/user-request-handlers'
import { emptyPreprocessor } from './preprocessors'

export function initializeEndpoints (server: Server, village: Village) {
  const validators = server.compileApiSchema(require('../endpoints/request-validation.json'))
  const userManager = new UserManager(village.model.ground.getLegacyDatabaseInterface(), { model: village.model })
  const userService = new UserService(server.getApp(), userManager, village.config.api.cookies)

  const publicEndpoints = [
    {
      method: Method.post,
      path: 'user/login',
      action: userRequestHandler.loginUser(userService),
      validator: validators.loginUser
    },

    {
      method: Method.post,
      path: 'user',
      action: userRequestHandler.registerUser(village.logic.user, userService),
      validator: validators.registerUser
    }
  ]

  const authorizedEndpoints = [
    {
      method: Method.post,
      path: 'user/logout',
      action: userRequestHandler.logoutUser(userService),
      validator: validators.logoutUser
    }
  ]

  server.createEndpoints(emptyPreprocessor, publicEndpoints)
}
