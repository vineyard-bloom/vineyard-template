import { requestTypes, responseTypes } from './api-types';
export declare const userRequestHandler: {
    registerUser: (req: requestTypes.LoginUserRequest) => Promise<responseTypes.LoginUserResponse>;
};
