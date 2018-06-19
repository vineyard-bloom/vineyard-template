import { Collection } from 'vineyard-ground';
import { User, UserData } from '../model/model-types';
import { UserManager } from 'vineyard-users';
export declare class UserLogic {
    model: Collection<User>;
    userManager: UserManager;
    constructor(userCollection: Collection<User>, userManager: UserManager);
    getUserManager(): UserManager;
    getTwoFactor(twoFactorSecret: string): Promise<string>;
    isLoggedIn(userId: string): Promise<boolean>;
    createUser(user: UserData): Promise<User>;
    getUserById(userId: string): Promise<User>;
    getUserByEmail(userEmail: string): Promise<User>;
}
