import { UserService } from 'vineyard-users';
import { requestTypes, responseTypes } from './api-types';
import { UserLogic } from '../../logic/logic';
export declare const userRequestHandler: {
    loginUser: (userService: UserService) => (req: requestTypes.LoginUserRequest) => Promise<responseTypes.LoginUserResponse>;
    registerUser: (userLogic: UserLogic, userService: UserService) => (req: requestTypes.RegisterUserRequest) => Promise<responseTypes.RegisterUserResponse>;
    logoutUser: (userService: UserService) => (req: requestTypes.LogoutUserRequest) => Promise<responseTypes.LogoutUserResponse>;
};
