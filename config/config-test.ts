import { FullConfig } from './config-types'
import { PizzaType } from '../src/model/model-types'

export const testConfig: FullConfig = {
  'api': {
    'port': 3000,
    'ssl': {
      'enabled': false,
      'publicFile': '',
      'privateFile': ''
    },
    'cookies': {
      'secret': '',
      'maxAge': 900000,
      'secure': true,
      'rolling': true
    }
  },
  'database': {
    'host': 'localhost',
    'database': '',
    'devMode': true,
    'username': '',
    'password': '',
    'dialect': 'postgres'
  },
  'janusEndpoints': {
    'sourceDir': '/endpoints/definitions',
    'targetDir': '/endpoints/generated',
    'stubMode': false,
    'endpointForSchema': undefined
  },
  'pizzaPrices': new Map<PizzaType, number>([
    [PizzaType.cheese, 1],
    [PizzaType.red, 0.75],
    [PizzaType.white, 1.25]
  ])
}
