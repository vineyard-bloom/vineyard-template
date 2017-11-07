import {UserDao} from "../backing-services/model/user-dao";
import {User, WithoutId} from "../backing-services/model/model-types";
import {BadRequest} from "vineyard-lawn/source/errors";

export class UserLogic {
    private readonly userDao: UserDao;

    constructor(userDao: UserDao){
        this.userDao = userDao;
    }

    //TODO: edit two factor secret code
    async createUser(createUserData: {email: string, password: string}): Promise<User> {
        const userToCreate: WithoutId<User> = {
            email: createUserData.email,
            password: createUserData.password,
            two_factor_secret: "some secret",
            two_factor_enabled: false
        };
        return await this.userDao.createUser(userToCreate);
    }

    async getUser(userId: string): Promise<User> {
        const retrievedUser = await this.userDao.getUser(userId);
        if(!retrievedUser) throw new BadRequest("User Not Found");
        return retrievedUser;
    }
}