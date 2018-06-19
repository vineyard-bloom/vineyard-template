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

export async function createUserFixture (userLogic: UserLogic, userData: Partial<User>): Promise<User> {
  const { email, password, emailVerified, twoFactorSecret, twoFactorEnabled } = userData
  const user = setUserData(email, password, emailVerified, twoFactorSecret, twoFactorEnabled)

  return userLogic.createUser(user)
}

export async function createLoggedInUser (userLogic: UserLogic) {
  const user = await createUserFixture(userLogic, {})
  const sessionData = {
    sid: '123',
    user: user.id,
    expires: Date.now()
  }
  const session = await userLogic.getUserManager().getSessionCollection().create(sessionData)
  return { user: user, session: session }
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

export async function batchCreateUsers (userLogic: UserLogic, quantity: number): Promise<null> {
  for (let i = 0; i < quantity; i++) {
    createRandomUser(userLogic)
  }
  console.log(`Created ${quantity} users`)

  return null
}
