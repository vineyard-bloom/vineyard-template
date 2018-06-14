export declare type User = {
    email: string;
    password: string;
    emailVerified: boolean;
    twoFactorSecret: string;
    twoFactorEnabled: boolean;
};
export declare type db<T> = {
    id: string;
};
