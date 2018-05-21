import { Request, Server } from 'vineyard-lawn'
import { Village } from '../village'
import { synthesizeApiActions } from './request-handlers'
import { configureJsonSchemaGeneration } from 'vineyard-janus'
import * as path from 'path'
import { JanusEndpointsConfig } from '../../config/config-types'
import { EndpointDefinition } from 'vineyard-janus/generators/endpoint-schema-parsing'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)
  const { apiActions } = village

  const endpointDefinitions = pullEndpointDefinitionsFromSchema(village.config.janusEndpoints)

  server.compileApiSchema({})
  server.createEndpoints(emptyPreprocessor, synthesizeApiActions(apiActions, endpointDefinitions))
}

function pullEndpointDefinitionsFromSchema(janusEndpointsConfig: JanusEndpointsConfig): EndpointDefinition[] {
  const { sourceDir, targetDir, helpersFile } = janusEndpointsConfig
  const prefix = path.join(__dirname, '..')
  const { endpointDefinitions } = configureJsonSchemaGeneration(prefix + targetDir, prefix + sourceDir, prefix + helpersFile)
  return endpointDefinitions
}