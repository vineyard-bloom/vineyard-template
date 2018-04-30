import { Method, Request, Server } from 'vineyard-lawn'
import { Village } from '../village'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  const validators = server.compileApiSchema(require('../endpoints/request-validation.json'))
  const { apiContract } = village

  server.createEndpoints(emptyPreprocessor, [
    {
      method: Method.post,
      path: 'pizza',
      action: apiContract.createPizza,
      validator: validators.createPizza
    },

    {
      method: Method.get,
      path: 'pizza',
      action: apiContract.getPizza,
      validator: validators.getPizza
    }
  ])
}
