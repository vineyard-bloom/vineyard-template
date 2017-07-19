import {Method} from 'vineyard-lawn'
import {TwoFactorEndpoints} from 'vineyard-users'
import {WebService} from "./web-service"

export function initializeEndpoints(webService: WebService) {
  const village = webService.getVillage()
  const validators = webService.compileApiSchema(require('./validation.json'))
  const userService = webService.getUserService()
  const twoFactorEndpoints = new TwoFactorEndpoints(webService)

  webService.createPublicEndpoints([

    {
      method: Method.post,
      path: "user/login",
      action: request => userService.login(request),
      validator: validators.login
    },

    twoFactorEndpoints.getNewSecret(),

    twoFactorEndpoints.verifyToken(),
  ])

  webService.createAuthorizedEndpoints([

    {
      method: Method.post,
      path: "user/logout",
      action: request => userService.createLogoutHandler(),
      validators: validators.empty
    },

  ])

}