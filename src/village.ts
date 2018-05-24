import { createModel, Model } from './model/index'
import { FullConfig } from '../config/config-types'
import { createLogic, Logic } from './logic/index'
import { BackingServices, createBackingServices } from './backing-services/index'
import { realConfig } from '../config/config'
import { createApiActions } from './endpoints/request-handlers'
import { ApiContract } from './endpoints/generated/api-contract'
import { apiStub } from './endpoints/generated/api-stub'

export interface Village {
  config: FullConfig
  backingServices: BackingServices
  model: Model
  logic: Logic
  apiActions: ApiContract
}

export function createVillage (config: FullConfig = realConfig, backingServiceOverrides: Partial<BackingServices> = {}): Village {
  const backingServices = createBackingServices(config, backingServiceOverrides)
  const model = createModel(config.database)
  const logic = createLogic(model, config)
  const apiActions = config.janusEndpoints.stubMode ? apiStub : createApiActions(logic)

  return {
    config,
    backingServices,
    model,
    logic,
    apiActions
  }
}
