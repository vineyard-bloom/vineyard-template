import { Request } from 'vineyard-lawn';
export declare namespace requestTypes {
    interface LoginUserRequest extends Request {
        data: {
            email: string;
            password: string;
            twoFactorCode: string;
        };
    }
    interface RegisterUserRequest extends Request {
        data: {
            email: string;
            password: string;
            twoFactorCode: string;
        };
    }
    interface LogoutUserRequest extends Request {
    }
}
export declare namespace responseTypes {
    interface LoginUserResponse {
        success: string;
    }
    interface RegisterUserResponse {
        success: string;
    }
    interface LogoutUserResponse {
        success: string;
    }
}
