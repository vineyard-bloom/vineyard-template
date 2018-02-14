import {User} from "../model/model-types";
import {UserLogic} from "../logic/user-logic";
import {CreateUserRequest, CreateUserResponse, GetUserRequest, GetUserResponse} from "../endpoints/endpoint-types";
import {mapUserToApiUser} from "../utility/mapping-helper";
import { Unauthorized, Request } from "vineyard-lawn"

export interface UserRequestHandler {
  createUser: (req: CreateUserRequest) => Promise<CreateUserResponse>
  getUser: (req: GetUserRequest) => Promise<GetUserResponse>
}

export function configureUserRequestHandler(userLogic: UserLogic){
  return {
    createUser : (req: Request) => createUser(userLogic, req),
    getUser : (req: Request) => getUser(userLogic, req)
  }
}

export const createUser: (userLogic: UserLogic, req: CreateUserRequest) => Promise<CreateUserResponse> =
  async (userLogic, req) => {
    const createdUser: User = await userLogic.createUser(req.data);
    return mapUserToApiUser(createdUser);
  };

export const getUser: (userLogic: UserLogic, req: GetUserRequest) => Promise<GetUserResponse> =
  async (userLogic, req) => {
    const retrievedUser: User = await userLogic.getUser(getLoggedInUserId(req));
    return mapUserToApiUser(retrievedUser);
  };

export function getLoggedInUserId(req: Request): string {
  const userId: string = req.session.user;
  if (userId) return userId;
  throw new Unauthorized()
}