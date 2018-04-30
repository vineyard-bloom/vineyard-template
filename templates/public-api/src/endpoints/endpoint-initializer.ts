import { Server, Method, Request } from 'vineyard-lawn'
import { mapPizzaToApiPizza, PizzaRequestHandler, pullData } from '../request-handlers/pizza-request-handler'
import { Village } from '../village'
import { CreatePizzaRequest } from './endpoint-types'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  const validators = server.compileApiSchema(require('../endpoints/request-validation.json'))

  const pizzaRequestHandler: PizzaRequestHandler = village.requestHandlers.pizzaRequestHandler

  server.createEndpoints(emptyPreprocessor, [
    {
      method: Method.post,
      path: 'pizza',
      action: (req: CreatePizzaRequest) => pullData(req)
        .then(village.logic.pizzaLogic.createPizza)
        .then(mapPizzaToApiPizza),
      validator: validators.createPizza
    },

    {
      method: Method.get,
      path: 'pizza',
      action: pizzaRequestHandler.getPizza,
      validator: validators.getPizza
    }
  ])
}
