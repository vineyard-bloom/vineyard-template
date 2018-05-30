import { Pizza } from './model-types'
import { DatabaseClient, DevModeler, Modeler, SequelizeClient } from 'vineyard-ground'
import { FullConfig } from '../../config/config-types'
import { StrictCollection } from 'vineyard-data/modern'

export interface Model {
  Pizza: PizzaCollection

  ground: Modeler
}
export type PizzaCollection = StrictCollection<Pizza, 'id'>
// Note, by setting PizzaCollection = Collection<Pizza>, you recover the type settings by the classical
// vineyard ground collections. The old collections have a looser type system allowing any data to pass into their
// create/get/update/remove functions, while these StrictCollections will allow only certain modifications of the base
// Pizza type. See vineyard-data for more information.

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
