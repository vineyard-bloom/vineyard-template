import {
  Collection,
  DatabaseClient,
  DevModeler,
  Modeler,
  SequelizeClient
} from 'vineyard-ground'
import { FullConfig } from '../../config/config-types'

export interface Model {
  LastBlock: Collection<LastBlock>

  ground: Modeler
}

export function createModel (
  dbConfig: FullConfig['database'],
  schema: any = require('./schema.json'),
  client: DatabaseClient = new SequelizeClient(dbConfig)
): Model {
  const modeler = !dbConfig.devMode
    ? new Modeler(schema, client)
    : new DevModeler(schema, client)

  return Object.assign({
    ground: modeler,
    db: modeler.getLegacyDatabaseInterface()
  }, modeler.collections) as any
}
