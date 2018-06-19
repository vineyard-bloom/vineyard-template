import { DatabaseClient, Modeler, Collection } from 'vineyard-ground';
import { FullConfig } from '../../config/config-types';
import { User } from './model-types';
export interface Model {
    EmailVerification: Collection<any>;
    User: Collection<User>;
    Onetimecode: Collection<any>;
    Session: Collection<any>;
    TempPassword: Collection<any>;
    ground: Modeler;
}
export declare function createModel(dbConfig: FullConfig['database'], schema?: any, client?: DatabaseClient): Model;
