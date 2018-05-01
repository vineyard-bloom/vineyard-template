import { createModel, Model } from './model/index'
import { FullConfig } from '../config/config-types'
import { createLogic, Logic } from './logic/index'
import { BackingServices, createBackingServices } from './backing-services/index'
import { realConfig } from '../config/config'

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
