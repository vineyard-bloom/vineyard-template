import { realConfig } from '../config/config'
import { createModel, Model } from './model/index'
import { FullConfig } from '../config/config-types'
import { createLogic, Logic } from './logic/index'
import { createRequestHandlers, RequestHandlers } from './request-handlers/index'
import { createBackingServices, BackingServices } from './backing-services/index'

export interface Village {
  config: FullConfig
  backingServices: BackingServices
  model: Model
  logic: Logic
  requestHandlers: RequestHandlers
}

export function createVillage (config: FullConfig, backingServiceOverrides: Partial<BackingServices> = {}): Village {
  const backingServices = createBackingServices(config, backingServiceOverrides)
  const model = createModel(config.database)
  const logic = createLogic(model, config)
  const requestHandlers = createRequestHandlers(logic)

  return {
    config,
    backingServices,
    model,
    logic,
    requestHandlers
  }
}
