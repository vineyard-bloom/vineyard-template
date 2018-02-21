
import { Server } from 'vineyard-lawn/source/server'
import { initializeEndpoints } from '../endpoints/endpoint-initializer'
import { Village } from '../village'

export async function startApiServer (village: Village): Promise<Server> {
  const server = new Server()
  initializeEndpoints(server, village)
  await server.start(village.config.api)
  return server
}
