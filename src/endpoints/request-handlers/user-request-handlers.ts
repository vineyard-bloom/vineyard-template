import { requestTypes, responseTypes } from './api-types'

export const userRequestHandler = {
  loginUser: async (
    req: requestTypes.LoginUserRequest
  ): Promise<responseTypes.LoginUserResponse> => {

    return { success: 'ok' }
  },

  registerUser: async (
    req: requestTypes.RegisterUserRequest
  ): Promise<responseTypes.RegisterUserResponse> => {
    return 1
  }
}
