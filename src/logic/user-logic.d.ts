import { Collection } from 'vineyard-ground';
import { User, UserData } from '../model/model-types';
export declare class UserLogic {
    model: Collection<User>;
    constructor(userCollection: Collection<User>);
    createUser(user: UserData): Promise<User>;
    getUserById(userId: string): Promise<User>;
}
