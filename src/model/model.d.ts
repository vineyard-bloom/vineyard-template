import { DatabaseClient, Modeler, Collection } from 'vineyard-ground';
import { FullConfig } from '../../config/config-types';
import { User } from './model-types';
export interface Model {
    User: Collection<User>;
    ground: Modeler;
}
export declare function createModel(dbConfig: FullConfig['database'], schema?: any, client?: DatabaseClient): Model;
