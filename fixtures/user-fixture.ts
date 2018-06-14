import { UserLogic } from './../src/logic/user-logic'
import { User, UserData } from '../src/model/model-types'
import {
  getRandomEmail,
  getRandomString,
  getRandomBool
} from './random-helpers'

export function setUserData (
  email = 'froggy@fresh.com',
  password = 'frogFrog567!?!',
  emailVerified = true,
  twoFactorSecret = 'babdjksbjvksbdjk',
  twoFactorEnabled = true
): UserData {
  return {
    email: email,
    password: password,
    emailVerified: emailVerified,
    twoFactorSecret: twoFactorSecret,
    twoFactorEnabled: twoFactorEnabled
  }
}

export function createUserFixture (userLogic: UserLogic, userData: Partial<User>): Promise<User> {
  const { email, password, emailVerified, twoFactorSecret, twoFactorEnabled } = userData
  const user = setUserData(email, password, emailVerified, twoFactorSecret, twoFactorEnabled)

  return userLogic.createUser(user)
}

export function createRandomUser (userLogic: UserLogic) {
  const userData = {
    email: getRandomEmail(),
    password: getRandomString(10),
    emailVerified: getRandomBool(),
    twoFactorSecret: getRandomString(20),
    twoFactorEnabled: getRandomBool()
  }

  return userLogic.createUser(userData)
}

export function batchCreateUsers (userLogic: UserLogic, quantity: number): null {
  createUserFixture(userLogic, {})
  for (let i = 0; i < quantity; i++) {
    createRandomUser(userLogic)
  }
  console.log(`Creating ${quantity} users`)

  return null
}
