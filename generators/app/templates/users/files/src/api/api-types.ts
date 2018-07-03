import { Request } from 'vineyard-lawn'

export namespace requestTypes {
  export interface LoginUserRequest extends Request {
    data: {
      email: string
      password: string
      twoFactor: string
    }
  }

  export interface RegisterUserRequest extends Request {
    data: {
      email: string
      password: string
      twoFactorSecret: string
    }
  }

  export interface LogoutUserRequest extends Request {

  }
}

export namespace responseTypes {
  export interface LoginUserResponse {
    success: string
  }

  export interface RegisterUserResponse {
    success: string
  }

  export interface LogoutUserResponse {
    success: string
  }
}
