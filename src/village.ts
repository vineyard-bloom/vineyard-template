import { createModel, Model } from './model/model'
import { FullConfig } from '../config/config-types'
import { createLogic, Logic } from './logic/logic'
import { Services, createServices } from './services/services'
import { config as defaultConfig } from '../config/config'

export interface Village {
  config: FullConfig
  services: Services
  model: Model
  logic: Logic
}

export function createVillage (config: FullConfig = defaultConfig): Village {
  const model = createModel(config.database)
  const logic = createLogic(model, config)
  const services = createServices(config, logic)

  return {
    config,
    services,
    model,
    logic
  }
}
