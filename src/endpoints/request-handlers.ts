import { mapPizzaToApiPizza } from './mapping-helpers'
import { ApiActions } from '../../endpoint-definitions-generated/api-contract'
import { Logic } from '../logic/index'
import { EndpointDefinition } from 'vineyard-janus/generators/parsing/endpoint-schema-parsing'
import { EndpointInfo, Method } from 'vineyard-lawn/source/types'
import { Request } from 'vineyard-lawn'

export function createApiActions (logic: Logic): ApiActions {
  const { pizzaLogic } = logic
  return {
    createPizza: (req) => pizzaLogic.createPizza(req.data).then(mapPizzaToApiPizza),
    getPizza: (req) => pizzaLogic.getPizza(req.data.pizzaId).then(mapPizzaToApiPizza)
  }
}

export function synthesizeApiActions (apiActions: ApiActions, endpointDefinitions: EndpointDefinition[]): EndpointInfo[] {
  return endpointDefinitions.map(ed => {
    return {
      method: Method.post,
      path: ed.path,
      action: extractActionByName(apiActions, ed.actionName),
      validator: ed.requestValidator as EndpointInfo['validator']
    }
  })
}

export function extractActionByName (apiActions: ApiActions, actionName: string): (req: Request) => Promise<any> {
  const forgetfulApiActions = apiActions as any as { [actionName: string]: (req: Request) => Promise<any>}
  const action = forgetfulApiActions[actionName]
  if (!action) {
    throw new Error('Expected an api action named ' + actionName + ' but none found.')
  }
  return action
}
