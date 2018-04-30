import { Pizza } from './model-types';
import { DatabaseClient, Modeler } from 'vineyard-ground';
import { FullConfig } from '../../config/config-types';
import { StrictCollection } from 'vineyard-data';
export interface Model {
    Pizza: StrictCollection<Pizza, 'id'>;
    ground: Modeler;
}
export declare function createModel(dbConfig: FullConfig['database'], schema?: any, client?: DatabaseClient): Model;
