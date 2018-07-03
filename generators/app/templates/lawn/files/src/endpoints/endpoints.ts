import { Method, Request, Server } from 'vineyard-lawn'
import { Village } from '../village'<%- features.users ? features.snippets['users-endpoints-imports'] : '' %>

export function initializeEndpoints (server: Server, village: Village) {
  const validators = server.compileApiSchema(require('./request-schema.json'))
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)<%- features.users ? features.snippets['users-service'] : '' %>

  const publicEndpoints = [
    {
      method: Method.get,
      path: '/status/shallow',
      action: () => Promise.resolve({ status: 200, message: 'ok' }),
      validator: undefined
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
      },
      validator: undefined
    },<%- features.users ? features.snippets['users-endpoints-public'] : '' %>
  ]
  <%- features.users ? features.snippets['users-endpoints-authorized'] : '' %>
  server.createEndpoints(emptyPreprocessor, publicEndpoints)<%- features.users ? '\n  server.createEndpoints(authPreprocessor(userService), authorizedEndpoints)' : '' %>
}