import { Request } from 'vineyard-lawn'

export namespace requestTypes {
  export interface LoginUserRequest extends Request {
    data: {

    }
  }
}

export namespace responseTypes {
  export interface LoginUserResponse {
    success: string
  }
}
