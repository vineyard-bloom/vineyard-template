import { Request, Server } from 'vineyard-lawn'
import { Village } from '../village'
import { synthesizeApiActions } from './request-handlers'
import { configureJsonSchemaGeneration } from 'vineyard-janus'
import * as path from 'path'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)
  const { apiActions } = village
  const { sourceDir, targetDir, helpersFile } = village.config.janusEndpoints
  const prefix = path.join(__dirname, '..')
  const { endpointDefinitions } = configureJsonSchemaGeneration(prefix + targetDir, prefix + sourceDir, prefix + helpersFile)
  server.compileApiSchema({})

  server.createEndpoints(emptyPreprocessor, synthesizeApiActions(apiActions, endpointDefinitions))
}
