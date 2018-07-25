import { createVersionPreprocessor, Version, Method, Request, Server } from 'vineyard-lawn'
import { Village } from '../village'

export function initializeEndpoints (server: Server, village: Village) {
  const versionPreprocessor = createVersionPreprocessor([new Version(1)])

  server.createEndpoints(versionPreprocessor, [
    {
      method: Method.get,
      path: '/',
      action: () => Promise.resolve("hello")
    }, {
      method: Method.get,
      path: '/status/shallow',
      action: () => Promise.resolve({ status: 200, message: 'ok' })
    }, {
      method: Method.get,
      path: '/status/deep',
      action: () => {
        try {
          village.model.ground.query('SELECT 100 as test;')
        } catch {
          return Promise.resolve({ status: 500, message: 'vineyard-ground db is unreachable' })
        }
        return Promise.resolve({ status: 200, message: 'ok' })
      }
    }
  ])
}