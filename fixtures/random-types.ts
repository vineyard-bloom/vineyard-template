import { Pizza, PizzaType } from '../src/model/model-types'
import { CreatePizzaData } from '../src/logic/pizza-logic'
import {
  getRandomEnumValue, getRandomFloatInclusive, getRandomIntInclusive
} from './random-helpers'
import { Omit } from 'vineyard-data/modern'

export function randomCreatePizzaData (): CreatePizzaData {
  return {
    type: getRandomEnumValue(PizzaType),
    size: getRandomIntInclusive(8, 16)
  }
}

export function randomPizzaToCreate (): Omit<Pizza, 'id'> {
  return {
    type: getRandomEnumValue(PizzaType),
    size: getRandomIntInclusive(8, 16),
    price: getRandomFloatInclusive(6.00, 18.00)
  }
}
