import { Server, Method, Request } from 'vineyard-lawn'
import { PizzaRequestHandler } from '../request-handlers/pizza-request-handler'
import { Village } from '../village'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  const pizzaRequestHandler: PizzaRequestHandler = village.requestHandlers.pizzaRequestHandler

  server.createEndpoints(emptyPreprocessor, [
    {
      method: Method.post,
      path: 'pizza',
      action: pizzaRequestHandler.createPizza
    },

    {
      method: Method.get,
      path: 'pizza',
      action: pizzaRequestHandler.getPizza
    }
  ])
}
