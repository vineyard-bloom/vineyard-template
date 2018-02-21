import { realConfig } from '../config/config'
import { createModel, Model } from './model/index'
import { FullConfig } from '../config/config-types'
import { createLogic, Logic } from './logic/index'
import { createRequestHandlers, RequestHandlers } from './request-handlers/index'

export interface Village {
  config: FullConfig
  model: Model
  logic: Logic
  requestHandlers: RequestHandlers
}

export function createVillage (backingServiceOverrides?: any): Village {
  const model = createModel(realConfig.database)
  const logic = createLogic(model, realConfig)
  const requestHandlers = createRequestHandlers(logic)

  return {
    config: realConfig,
    model: model,
    logic: logic,
    requestHandlers: requestHandlers
  }
}
