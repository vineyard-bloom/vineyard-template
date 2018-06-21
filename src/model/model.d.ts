import { DatabaseClient, Modeler } from 'vineyard-ground';
import { FullConfig } from '../../config/config-types';
export interface Model {
    ground: Modeler;
}
export declare function createModel(dbConfig: FullConfig['database'], schema?: any, client?: DatabaseClient): Model;
