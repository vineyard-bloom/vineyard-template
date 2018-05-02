import { Pizza } from './model-types';
import { DatabaseClient, Modeler } from 'vineyard-ground';
import { FullConfig } from '../../config/config-types';
import { StrictCollection } from 'vineyard-data';
export interface Model {
    Pizza: PizzaCollection;
    ground: Modeler;
}
export declare type PizzaCollection = StrictCollection<Pizza, 'id'>;
export declare function createModel(dbConfig: FullConfig['database'], schema?: any, client?: DatabaseClient): Model;
