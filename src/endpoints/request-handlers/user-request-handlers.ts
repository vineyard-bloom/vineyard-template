import { requestTypes, responseTypes } from './api-types'

export const userRequestHandler = {
  registerUser: async (req: requestTypes.LoginUserRequest): Promise<responseTypes.LoginUserResponse> => {
    return async req => {

    }
  }
}