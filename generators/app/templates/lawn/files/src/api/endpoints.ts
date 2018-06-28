import { Method, Request, Server } from 'vineyard-lawn'
import { Village } from '../village'

export function initializeEndpoints (server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  server.createEndpoints(emptyPreprocessor, [
    {
      method: Method.get,
      path: '/status/shallow',
      action: () => Promise.resolve({ status: 200, message: 'ok' })
    }, {
      method: Method.get,
      path: '/status/deep',
      action: async () => {
        try {
          await village.model.ground.query('SELECT 100 as test;')
          return Promise.resolve({ status: 200, message: 'ok' })
        } catch {
          return Promise.resolve({ status: 500, message: 'vineyard-ground db is unreachable' })
        }
      }
    }
  ])
}