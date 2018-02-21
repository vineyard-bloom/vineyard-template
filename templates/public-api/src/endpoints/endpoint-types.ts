import { Request } from 'vineyard-lawn'

export interface CreateUserRequest extends Request {
    data: {
        email: string,
        password: string
    }
}
export type CreateUserResponse = ApiUser;

export type GetUserRequest = EmptyRequest
export type GetUserResponse = ApiUser;




export interface ApiUser {
    email: string
}

export interface EmptyRequest extends Request {
    readonly data: Empty
}

export interface Empty {
    _?: undefined
}
