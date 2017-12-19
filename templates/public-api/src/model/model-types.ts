//TODO: Edit this interface for specific uses
export interface User extends HasId {
    email: string //or username is required
    password: string //required
    twoFactorSecret: string //required for 2fa
    twoFactorEnabled: boolean //required for 2fa
    //can add any additional fields here and to user table def in schema
}

export type Seed<T extends HasId> = T | string;

export interface HasId { id: string; }
export type WithoutId<T extends HasId> = Omit<T, "id">


