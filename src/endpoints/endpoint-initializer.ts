import { Request, Server } from 'vineyard-lawn'
import { Village } from '../village'
import {
  createEndpointToServeEndpointSchema,
  pullEndpointDefinitionsFromSchema,
  synthesizeApiActions
} from './janus-lawn-helpers'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)
  const { apiContract, config } = village

  const { endpointDefinitions, rawSchema } = pullEndpointDefinitionsFromSchema(config.janusEndpoints)
  const endpointInfos = synthesizeApiActions(apiContract, endpointDefinitions)

  if(config.janusEndpoints.endpointForSchema) {
    endpointInfos.push(createEndpointToServeEndpointSchema(config.janusEndpoints.endpointForSchema, rawSchema))
  }

  server.compileApiSchema({})
  server.createEndpoints(emptyPreprocessor, endpointInfos)
}