import { Method, Request, Server } from 'vineyard-lawn'
import { Village } from '../village'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  const validators = server.compileApiSchema(require('../endpoints/request-validation.json'))

  server.createEndpoints(emptyPreprocessor, [
    
  ])
}