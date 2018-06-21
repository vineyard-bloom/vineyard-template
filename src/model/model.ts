import {
  DatabaseClient,
  DevModeler,
  Modeler,
  SequelizeClient,
  Collection } from 'vineyard-ground'
import { FullConfig } from '../../config/config-types'
import {
  EmailVerification,
  Onetimecode,
  Session,
  TempPassword,
  User
} from './model-types'

export interface Model {
  EmailVerification: Collection<EmailVerification>
  Onetimecode: Collection<Onetimecode>
  Session: Collection<Session>
  TempPassword: Collection<TempPassword>
  User: Collection<User>

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
