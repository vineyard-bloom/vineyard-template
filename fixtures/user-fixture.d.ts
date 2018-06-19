import { UserLogic } from './../src/logic/user-logic';
import { User, UserData } from '../src/model/model-types';
export declare function setUserData(email?: string, password?: string, emailVerified?: boolean, twoFactorSecret?: string, twoFactorEnabled?: boolean): UserData;
export declare function createUserFixture(userLogic: UserLogic, userData: Partial<User>): Promise<User>;
export declare function createLoggedInUser(userLogic: UserLogic): Promise<{
    user: User;
    session: any;
}>;
export declare function createRandomUser(userLogic: UserLogic): Promise<User>;
export declare function batchCreateUsers(userLogic: UserLogic, quantity: number): Promise<null>;
