import { Pizza } from './model-types'
import { Collection } from 'vineyard-ground/source/collection'
import { SequelizeClient, DatabaseClient, DevModeler, Modeler } from 'vineyard-ground'
import { FullConfig } from '../../config/config-types'

export interface Model {
  Pizza: Collection<Pizza>

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
