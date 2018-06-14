import { FullConfig } from './config-types'

export const config: FullConfig = {
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
  }
}
