import {UserDao} from "../model/dao/user-dao";
import {User, WithoutId} from "../model/model-types";
import {BadRequest} from "vineyard-lawn/source/errors";

export class UserLogic {
    private readonly userDao: UserDao;

    constructor(userDao: UserDao){
        this.userDao = userDao;
    }

    //TODO: edit two factor secret code
    async createUser(createUserData: CreateUserData): Promise<User> {
        const userToCreate: WithoutId<User> = {
            email: createUserData.email,
            password: createUserData.password,
            twoFactorSecret: "some secret",
            twoFactorEnabled: false
        };
        return await this.userDao.createUser(userToCreate);
    }

    async getUser(userId: string): Promise<User> {
        const retrievedUser = await this.userDao.getUser(userId);
        if(!retrievedUser) throw new BadRequest("User Not Found");
        return retrievedUser;
    }
}

export interface CreateUserData {
    email: string,
    password: string
}