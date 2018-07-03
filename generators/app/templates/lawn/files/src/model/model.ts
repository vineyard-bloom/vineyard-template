import {
  DatabaseClient,
  DevModeler,
  Modeler,
  SequelizeClient<%- features.users ? ',\n  Collection' : '' %>
} from 'vineyard-ground'
import { FullConfig } from '../../config/config-types'<%- features.users ? features.snippets['users-model-imports'] : '' %>

export interface Model {
  <%- features.users ? features.snippets['users-model-definition'] : 'ground: Modeler' %>
}

export function createModel (
  dbConfig: FullConfig['database'],
  schema: any = require('../api/schema.json'),
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
