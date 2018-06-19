import { Method, Request, Server } from 'vineyard-lawn'
import { Village } from '../village'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  server.createEndpoints(emptyPreprocessor, [
    {
      method: Method.get,
      path: '/',
      action: () => Promise.resolve("hello")
    }
  ])
}