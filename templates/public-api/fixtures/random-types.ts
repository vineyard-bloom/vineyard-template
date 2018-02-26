import { PizzaType, WithoutId } from '../src/model/model-types'
import { CreatePizzaData } from '../src/logic/pizza-logic'
import {
  getRandomEnumValue, getRandomIntInclusive
} from './random-helpers'

export function randomCreatePizzaData (): CreatePizzaData {
  return {
    type: getRandomEnumValue(PizzaType),
    size: getRandomIntInclusive(8, 16)
  }
}
