import { Method, Request, Server } from 'vineyard-lawn'
import { Village } from '../village'
import {
  createUserEndpointGenerator,
  UserManager,
  UserService
} from 'vineyard-users'
import { userRequestHandler } from './request-handlers/user-request-handlers'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  const validators = server.compileApiSchema(require('../endpoints/request-validation.json'))
  const userManager = new UserManager(village.model.ground.db, { model: village.model })
  const userService = new UserService(server.getApp(), userManager, village.config.api.cookies)
  const userEndpoints = createUserEndpointGenerator(userManager, userService, validators)

  // Creates public endpoints
  server.createEndpoints(emptyPreprocessor, [
    // Two options for login endpoint at present
    userEndpoints.login2faWithBackup(),
    userEndpoints.logout(),
    {
      method: Method.post,
      path: 'user',
      action: userRequestHandler.registerUser,
      validators: validators.registerUser
    }
  ])
}
