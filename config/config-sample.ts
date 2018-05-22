import { FullConfig } from './config-types'
import { PizzaType } from '../src/model/model-types'

const sampleConfig: FullConfig = {
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
      'secure': false,
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
    'sourceDir': '/src/endpoints/definitions',
    'targetDir': '/src/endpoints/generated',
    'stubMode': true,
    'endpointForSchema': 'endpointSchema'
  },
  'pizzaPrices': new Map<PizzaType, number>()
}
