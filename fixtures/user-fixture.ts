import { UserLogic } from './../src/logic/user-logic'
import { User, UserData } from '../src/model/model-types'
import {
  getRandomEmail,
  getRandomString,
  getRandomBool
} from './random-helpers'
const userFixture = require('./user-fixture.json')

export async function createUserFixture (userLogic: UserLogic, fixtureName: string) {
  const fixtureData = userFixture[fixtureName]

  return userLogic.createUser(fixtureData)
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
  for (let i = 1; i < quantity; i++) {
    createRandomUser(userLogic)
  }
  await createRandomUser(userLogic)
  console.log(`Created ${quantity} users`)

  return null
}
