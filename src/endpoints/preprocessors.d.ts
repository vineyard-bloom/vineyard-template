import { Request } from 'vineyard-lawn';
import { UserService } from 'vineyard-users';
export declare const emptyPreprocessor: (request: Request) => Promise<Request>;
export declare const versionPreprocessor: (request: Request) => void;
export declare const authPreprocessor: (userService: UserService) => (request: Request) => Promise<Request>;
