import { mapf, pizzaToApiPizza } from './mapping-helpers'
import { Logic } from '../logic/index'
import { EndpointInfo, Method } from 'vineyard-lawn/source/types'
import { Request } from 'vineyard-lawn'
import { ApiActions } from './generated/api-contract'
import { EndpointDefinition } from 'vineyard-janus'

export function createApiActions (logic: Logic): ApiActions {
  const { pizzaLogic } = logic
  return {
    createPizza: (req) => pizzaLogic.createPizza(req.data).then(pizzaToApiPizza),
    getPizza: (req) => pizzaLogic.getPizza(req.data.pizzaId).then(pizzaToApiPizza),
    indexPizza: (req) => pizzaLogic.indexPizza().then(mapf(pizzaToApiPizza))
  }
}

export function synthesizeApiActions (apiActions: ApiActions, endpointDefinitions: EndpointDefinition[]): EndpointInfo[] {
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

export function extractActionByName (apiActions: ApiActions, actionName: string): (req: Request) => Promise<any> {
  const forgetfulApiActions = apiActions as any as { [actionName: string]: (req: Request) => Promise<any>}
  const action = forgetfulApiActions[actionName]
  if (!action) {
    throw new Error('Expected an api action named ' + actionName + ' but none found.')
  }
  return action
}
