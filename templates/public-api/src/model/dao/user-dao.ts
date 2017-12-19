import {Collection} from "vineyard-ground";
import {Seed, User, WithoutId} from "../model-types";

export class UserDao {
    private readonly userCollection: Collection<User>;

    constructor(userCollection: Collection<User>){
        this.userCollection = userCollection;
    }

    async createUser(userToCreate: WithoutId<User>): Promise<User> {
        return await this.userCollection.create(userToCreate);
    }

    async getUser(seed: Seed<User>): Promise<User | undefined>{
        return await this.userCollection.get(seed);
    }
}