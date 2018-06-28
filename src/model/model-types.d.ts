export declare type PostgresData = {
    id: string;
    created: string;
    modified: string;
};
export declare type PostgresDataCustomId = {
    created: string;
    modified: string;
};
export declare type User = UserData & PostgresData;
export declare type UserData = {
    email: string;
    password: string;
    emailVerified: boolean;
    twoFactorSecret: string;
    twoFactorEnabled: boolean;
};
export declare type EmailVerificationData = {
    user: string;
    code: string;
};
export declare type EmailVerification = EmailVerificationData & PostgresData;
export declare type OnetimecodeData = {
    user: string;
    code: string;
    available: boolean;
};
export declare type Onetimecode = OnetimecodeData & PostgresData;
export declare type SessionData = {
    sid: string;
    user: string;
    expires: string;
    data: string;
};
export declare type Session = SessionData & PostgresDataCustomId;
export declare type TempPasswordData = {
    user: string;
    password: string;
};
export declare type TempPassword = TempPasswordData & PostgresDataCustomId;
