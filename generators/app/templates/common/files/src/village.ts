import { createModel, Model } from './model'
import { FullConfig } from '../config/config-types'
import { Logic } from './logic'
import {
  BackingServices,
  createBackingServices
} from './backing-services'
import { config as defaultConfig } from '../config/config'

export interface Village {
  config: FullConfig
  backingServices: BackingServices
  model: Model
  logic: Logic
}

export function createVillage (
  config: FullConfig = defaultConfig,
  backingServiceOverrides: Partial<BackingServices> = {}
): Village {
  const backingServices = createBackingServices(config, backingServiceOverrides)
  const model = createModel(config.database)
  const logic = {
    user: {}
  }

  return {
    config,
    backingServices,
    model,
    logic
  }
}
