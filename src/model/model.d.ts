import { DatabaseClient, Modeler, Collection } from 'vineyard-ground';
import { FullConfig } from '../../config/config-types';
import { EmailVerification, Onetimecode, Session, TempPassword, User } from './model-types';
export interface Model {
    EmailVerification: Collection<EmailVerification>;
    Onetimecode: Collection<Onetimecode>;
    Session: Collection<Session>;
    TempPassword: Collection<TempPassword>;
    User: Collection<User>;
    ground: Modeler;
}
export declare function createModel(dbConfig: FullConfig['database'], schema?: any, client?: DatabaseClient): Model;
