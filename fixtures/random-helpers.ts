const speakeasy = require('speakeasy')
const uuidv4 = require('uuid/v4')

export function getRandomIntInclusive (min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min // The maximum is inclusive and the minimum is inclusive
}

export function getRandomUUID (): string {
  return uuidv4()
}

export function getRandomString (length: number): string {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

export function getRandomEmail (): string {
  return getRandomString(6).concat('@').concat(getRandomString(4)).concat('.com')
}

export function getRandomBool (): boolean {
  return getRandomIntInclusive(0,1) > 0
}

export function getRandom2faSecret (): string {
  const secret = speakeasy.generateSecret()
  return speakeasy.base32
}

export function getRandomEnumKey (enumClass: any) {
  const keys = Object.keys(enumClass)
  const total = keys.length
  const half = total / 2

  return Object.keys(enumClass)[getRandomIntInclusive(half, total - 1)]
}

export function getRandomEnumValue (enumClass: any) {
  const key = getRandomEnumKey(enumClass)
  return enumClass[key]
}

export function arrayOfRandom<T> (total: number, generator: (index?: number, prev?: T) => T): T[] {
  const toReturn: T[] = []
  for (let i = 0; i < total; i ++) {
    toReturn.push(generator(i, toReturn[i - 1]))
  }
  return toReturn
}
