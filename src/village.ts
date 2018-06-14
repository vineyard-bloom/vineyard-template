import { UserManager, UserService } from 'vineyard-users'
import { createModel, Model } from './model/model'
import { FullConfig } from '../config/config-types'
import { Logic, UserLogic } from './logic'
import {
  BackingServices,
  createBackingServices
} from './backing-services/backing-services'
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
    user: new UserLogic(model.User)
  }

  return {
    config,
    backingServices,
    model,
    logic
  }
}
