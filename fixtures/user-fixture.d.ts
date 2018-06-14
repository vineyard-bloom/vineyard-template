import { UserLogic } from './../src/logic/user-logic';
import { db, User } from '../src/model/model-types';
export declare function setUserData(email?: string, password?: string, emailVerified?: boolean, twoFactorSecret?: string, twoFactorEnabled?: boolean): User;
export declare function createUserFixture(userLogic: UserLogic, userData: Partial<User>): Promise<db<User>>;
