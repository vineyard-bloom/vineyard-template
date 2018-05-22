import { Request, Server } from 'vineyard-lawn'
import { Village } from '../village'
import { synthesizeApiActions } from './request-handlers'
import { configureJsonSchemaGeneration } from 'vineyard-janus'
import * as path from 'path'
import { JanusEndpointsConfig } from '../../config/config-types'
import { EndpointDefinition } from 'vineyard-janus/generators/endpoint-schema-parsing'
import { EndpointInfo, Method } from 'vineyard-lawn/source/types'
const schemaValidators = require('./schema-validators.json')

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)
  const { apiActions, config } = village

  const { endpointDefinitions, rawSchema } = pullEndpointDefinitionsFromSchema(config.janusEndpoints)
  const endpointInfo = synthesizeApiActions(apiActions, endpointDefinitions)

  if(config.janusEndpoints.endpointForSchema) {
    endpointInfo.push(createEndpointToServeEndpointSchema(config.janusEndpoints.endpointForSchema, rawSchema))
  }

  server.compileApiSchema({})
  server.createEndpoints(emptyPreprocessor, endpointInfo)
}

function pullEndpointDefinitionsFromSchema(janusEndpointsConfig: { sourceDir: string, targetDir: string }): {
  rawSchema: object, endpointDefinitions: EndpointDefinition[]
}
{
  const { sourceDir, targetDir } = janusEndpointsConfig
  const prefix = path.join(__dirname, '..')
  return configureJsonSchemaGeneration(
    prefix + targetDir,
    prefix + sourceDir,
    schemaValidators
  )
}

function createEndpointToServeEndpointSchema(path: string, rawSchema: object): EndpointInfo {
  return {
    method: Method.get,
    path,
    action: () => Promise.resolve(rawSchema)
  }
}