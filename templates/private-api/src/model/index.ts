import {ConnectionOptions, createConnection} from "typeorm";

export * from './model-types'
export * from './pizza-dao'

export async function createDatabaseConnection(connectionConfig: ConnectionOptions) {
  const databaseConfig = Object.assign({entities: [__dirname + '/entities/*.js']}, connectionConfig)
  return await createConnection(databaseConfig);
}