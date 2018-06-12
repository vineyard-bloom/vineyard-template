import { createModel, Model } from './model/model'
import { FullConfig } from '../config/config-types'
import { createLogic, Logic } from './logic/logic'
import { BackingServices, createBackingServices } from './backing-services/backing-services'
import { realConfig } from '../config/config'
import { implementApiContract } from './endpoints/api-contract-implementation'
import { apiStub } from './endpoints/generated/api-stub'

export interface Village {
  config: FullConfig
  backingServices: BackingServices
  model: Model
  logic: Logic
}

export function createVillage (config: FullConfig = realConfig, backingServiceOverrides: Partial<BackingServices> = {}): Village {
  const backingServices = createBackingServices(config, backingServiceOverrides)
  const model = createModel(config.database)
  const logic = createLogic(model, config)

  return {
    config,
    backingServices,
    model,
    logic
  }
}
