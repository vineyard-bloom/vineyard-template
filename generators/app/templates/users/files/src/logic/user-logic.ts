import { Collection } from 'vineyard-ground'
import { User, UserData } from '../model/model-types'
import { UserManager, UserService, getTwoFactorToken } from 'vineyard-users'

export class UserLogic {
  model: Collection<User>
  userManager: UserManager

  constructor (userCollection: Collection<User>, userManager: UserManager) {
    this.model = userCollection
    this.userManager = userManager
  }

  getUserManager (): UserManager {
    return this.userManager
  }

  async getTwoFactor (twoFactorSecret: string): Promise<string> {
    return getTwoFactorToken(twoFactorSecret)
  }

  async isLoggedIn (userId: string): Promise<boolean> {
    const userSession = await this.userManager.getSessionCollection().first({ user: userId })
    if (!userSession || userSession.expires < Date.now()) {
      return false
    }

    return true
  }

  async createUser (user: UserData): Promise<User> {
    const createdUser = await this.userManager.createUser(user, 'email')
    if (!createdUser.id) {
      throw new Error('Error creating user: ' + user.email)
    }

    return createdUser
  }

  async getUserById (userId: string): Promise<User> {
    const user = await this.model.get(userId)
    if (!user) {
      throw new Error('No user found with id: ' + userId)
    }

    return user
  }

  async getUserByEmail (userEmail: string): Promise<User> {
    const user = await this.model.first({ email: userEmail })
    if (!user) {
      throw new Error('No user found with email: ' + userEmail)
    }

    return user
  }
}
