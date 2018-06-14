import { UserLogic } from './../src/logic/user-logic'
import { db, User } from '../src/model/model-types'

export function setUserData (
  email = 'froggy@fresh.com',
  password = 'frogFrog567!?!',
  emailVerified = true,
  twoFactorSecret = 'babdjksbjvksbdjk',
  twoFactorEnabled = true
): User {
  return {
    email: email,
    password: password,
    emailVerified: emailVerified,
    twoFactorSecret: twoFactorSecret,
    twoFactorEnabled: twoFactorEnabled
  }
}

export function createUserFixture (userLogic: UserLogic, userData: Partial<User>): Promise<db<User>> {
  const { email, password, emailVerified, twoFactorSecret, twoFactorEnabled } = userData
  const user = setUserData(email, password, emailVerified, twoFactorSecret, twoFactorEnabled)
  return userLogic.createUser(user)
}
