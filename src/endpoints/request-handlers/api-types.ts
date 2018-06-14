import { Request } from 'vineyard-lawn'

export namespace requestTypes {
  export interface LoginUserRequest extends Request {
    data: {

    }
  }

  export interface RegisterUserRequest extends Request {
    data: {

    }
  }
}

export namespace responseTypes {
  export interface LoginUserResponse {
    success: string
  }

  export interface RegisterUserResponse {

  }
}
