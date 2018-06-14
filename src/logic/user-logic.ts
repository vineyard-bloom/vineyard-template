import { Collection } from 'vineyard-ground'
import { db, User } from '../model/model-types'

export class UserLogic {
  model: Collection<User>

  constructor (userCollection: Collection<User>) {
    this.model = userCollection
  }

  async createUser (user: User): Promise<db<User>> {
    return this.model.User.create(user)
  }

  async getUserById (userId: string): Promise<db<User>> {
    return this.model.User.get(userId)
  }
}
