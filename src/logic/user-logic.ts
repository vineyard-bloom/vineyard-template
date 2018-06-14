import { Collection } from 'vineyard-ground'
import { User, UserData } from '../model/model-types'

export class UserLogic {
  model: Collection<User>

  constructor (userCollection: Collection<User>) {
    this.model = userCollection
  }

  async createUser (user: UserData): Promise<User> {
    const createdUser = await this.model.create(user)
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
}
