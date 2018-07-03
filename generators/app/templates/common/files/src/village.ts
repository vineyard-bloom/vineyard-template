<%- features.users ? "import { UserManager } from 'vineyard-users'\n" : '' %>import { createModel, Model } from './model/model'
import { FullConfig } from '../config/config-types'
import {
  BackingServices,
  createBackingServices
} from './backing-services'
import { config as defaultConfig } from '../config/config'
import { Schema } from 'vineyard-ground/source/schema'<%- features.users ? features.snippets['users-logic-interface'] : '' %>

export interface Village {
  config: FullConfig
  backingServices: BackingServices
  model: Model
  <%- features.users ? 'logic: Logic' : 'logic: any' %>
}

export function createVillage (
  config: FullConfig = defaultConfig,
  backingServiceOverrides: Partial<BackingServices> = {}
): Village {
  const backingServices = createBackingServices(config, backingServiceOverrides)
  const model = createModel(config.database)
<%- features.users ? features.snippets['users-logic'] : '  const logic = {}' %>

  return {
    config,
    backingServices,
    model,
    logic
  }
}
