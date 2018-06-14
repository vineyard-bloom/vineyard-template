export declare type User = UserData & {
    id: string;
};
export declare type UserData = {
    email: string;
    password: string;
    emailVerified: boolean;
    twoFactorSecret: string;
    twoFactorEnabled: boolean;
};
