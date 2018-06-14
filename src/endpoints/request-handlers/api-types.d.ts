import { Request } from 'vineyard-lawn';
export declare namespace requestTypes {
    interface LoginUserRequest extends Request {
        data: {};
    }
    interface RegisterUserRequest extends Request {
        data: {};
    }
}
export declare namespace responseTypes {
    interface LoginUserResponse {
        success: string;
    }
    interface RegisterUserResponse {
    }
}
