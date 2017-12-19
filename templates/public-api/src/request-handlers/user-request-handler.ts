import {User} from "../model/model-types";
import {UserLogic} from "../logic/user-logic";
import {Unauthorized} from "vineyard-lawn/source/errors";
import {Request} from "vineyard-lawn";
import {CreateUserRequest, CreateUserResponse, GetUserRequest, GetUserResponse} from "../endpoints/endpoint-types";
import {mapUserToApiUser} from "../utility/mapping-helper";


export class UserRequestHandler {
    private readonly userLogic: UserLogic;

    constructor(userLogic: UserLogic){
        this.userLogic = userLogic;
    }

    createUser: (req: CreateUserRequest) => Promise<CreateUserResponse> =
        async (req) => {
            const createdUser: User = await this.userLogic.createUser(req.data);
            return mapUserToApiUser(createdUser);
        };

    getUser: (req: GetUserRequest) => Promise<GetUserResponse> =
        async (req) => {
            const retrievedUser: User = await this.userLogic.getUser(getLoggedInUserId(req));
            return mapUserToApiUser(retrievedUser);
        };

}

export function getLoggedInUserId(req: Request): string {
    const userId: string = req.session.user;
    if (userId) return userId;
    throw new Unauthorized()
}