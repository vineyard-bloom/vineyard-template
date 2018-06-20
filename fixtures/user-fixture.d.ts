import { UserLogic } from './../src/logic/user-logic';
import { User } from '../src/model/model-types';
export declare function createUserFixture(userLogic: UserLogic, fixtureName: string): Promise<User>;
export declare function createRandomUser(userLogic: UserLogic): Promise<User>;
export declare function batchCreateUsers(userLogic: UserLogic, quantity: number): Promise<null>;
