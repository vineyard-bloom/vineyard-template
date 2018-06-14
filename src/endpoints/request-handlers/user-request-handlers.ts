import { UserService } from 'vineyard-users'
import { requestTypes, responseTypes } from './api-types'
import { UserLogic } from '../../logic/logic'

export const userRequestHandler = {
  loginUser: (userService: UserService) => {
    return async (req: requestTypes.LoginUserRequest): Promise<responseTypes.LoginUserResponse> => {
      const login = await userService.login2faWithBackup(req.data.twoFactorCode, req)

      return { success: 'ok' }
    }
  },

  registerUser: (userLogic: UserLogic, userService: UserService) => {
    return async (req: requestTypes.RegisterUserRequest): Promise<responseTypes.RegisterUserResponse> => {
      const userData = { ...req.data, emailVerified: false, twoFactorEnabled: true }
      // const twoFactorSecret = userService.
      await userLogic.createUser(userData)
      await userService.login2faWithBackup(userData.twoFactorCode, req)

      return { success: 'ok' }
    }
  },

  logoutUser: (userService: UserService) => {
    return async (req: requestTypes.LogoutUserRequest): Promise<responseTypes.LogoutUserResponse> => {
      const logout = await userService.logout(req)

      return { success: 'ok' }
    }
  }
}