import { Collection } from 'vineyard-ground';
import { db, User } from '../model/model-types';
export declare class UserLogic {
    model: Collection<User>;
    constructor(userCollection: Collection<User>);
    createUser(user: User): Promise<db<User>>;
    getUserById(userId: string): Promise<db<User>>;
}
