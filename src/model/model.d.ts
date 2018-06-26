import { Collection, DatabaseClient, Modeler } from 'vineyard-ground';
import { FullConfig } from '../../config/config-types';
import { Address, LastBlock, Transaction } from './model-types';
export interface Model {
    Address: Collection<Address>;
    LastBlock: Collection<LastBlock>;
    Transaction: Collection<Transaction>;
    ground: Modeler;
}
export declare function createModel(dbConfig: FullConfig['database'], schema?: any, client?: DatabaseClient): Model;
