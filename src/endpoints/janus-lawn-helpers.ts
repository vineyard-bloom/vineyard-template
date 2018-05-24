import { EndpointInfo, Method, Request } from 'vineyard-lawn'
import { configureJsonSchemaGeneration, EndpointDefinition } from 'vineyard-janus'
import { ApiContract } from './generated/api-contract'
import * as path from 'path'
const schemaValidators = require('./schema-validators.json')

export function createEndpointToServeEndpointSchema(path: string, rawSchema: object): EndpointInfo {
  return {
    method: Method.get,
    path,
    action: () => Promise.resolve(rawSchema)
  }
}

export function pullEndpointDefinitionsFromSchema(
  janusEndpointsConfig: { sourceDir: string, targetDir: string }
): { rawSchema: object, endpointDefinitions: EndpointDefinition[] } {
  const { sourceDir, targetDir } = janusEndpointsConfig

  const prefix = path.join(__dirname, '..')

  return configureJsonSchemaGeneration(
    prefix + targetDir,
    prefix + sourceDir,
    schemaValidators
  )
}

export function synthesizeApiActions (apiActions: ApiContract, endpointDefinitions: EndpointDefinition[]): EndpointInfo[] {
  return endpointDefinitions.map(ed => {
    return {
      method: mapJsonVerbToMethod[ed.verb],
      path: ed.path,
      action: extractActionByName(apiActions, ed.actionName),
      validator: ed.requestValidator as EndpointInfo['validator']
    }
  })
}

const mapJsonVerbToMethod: { [verb: string]: Method } = {
  'get': Method.get,
  'post': Method.post,
  'delete': Method.delete,
  'put': Method.put,
  'patch': Method.patch
}

export function extractActionByName (apiActions: ApiContract, actionName: string): (req: Request) => Promise<any> {
  const forgetfulApiActions = apiActions as any as { [actionName: string]: (req: Request) => Promise<any>}
  const action = forgetfulApiActions[actionName]
  if (!action) {
    throw new Error('Expected an api action named ' + actionName + ' but none found.')
  }
  return action
}
