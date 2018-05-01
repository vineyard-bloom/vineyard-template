import { Method, Request, Server } from 'vineyard-lawn'
import { Village } from '../village'
import { createPizza, getPizza } from './request-handlers'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  const validators = server.compileApiSchema(require('../endpoints/request-validation.json'))
  const { pizzaLogic } = village.logic

  server.createEndpoints(emptyPreprocessor, [
    {
      method: Method.post,
      path: 'pizza',
      action: req => createPizza(pizzaLogic, req),
      validator: validators.createPizza
    },

    {
      method: Method.get,
      path: 'pizza',
      action: req => getPizza(pizzaLogic, req),
      validator: validators.getPizza
    }
  ])
}
