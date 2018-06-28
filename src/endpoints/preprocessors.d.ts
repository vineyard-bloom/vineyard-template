import { Request } from 'vineyard-lawn';
export declare const emptyPreprocessor: (request: Request) => Promise<Request>;
export declare const versionPreprocessor: (request: Request) => void;
export declare const authPreprocessor: (userService: any) => (request: Request) => Promise<Request>;
