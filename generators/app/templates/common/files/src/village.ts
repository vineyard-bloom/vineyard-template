import { createModel, Model } from './model'
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

const sampleSchema = new Schema({
  samplePeople: {
    properties: {
      name: {
        type: "string"
      },
      favoriteAnimal: {
        type: "string"
      }
    }
  }
})

export function createVillage (
  config: FullConfig = defaultConfig,
  backingServiceOverrides: Partial<BackingServices> = {}
): Village {
  const backingServices = createBackingServices(config, backingServiceOverrides)
  const model = createModel(config.database, sampleSchema)
<%- features.users ? features.snippets['users-logic'] : '  const logic = {}' %>

  return {
    config,
    backingServices,
    model,
    logic
  }
}
