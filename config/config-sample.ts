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
    'database': 'vineyard_server_template',
    'devMode': true,
    'username': '',
    'password': '',
    'dialect': 'postgres'
  }
}

export const testConfig: FullConfig = {
  'api': {
    'port': 3030,
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
    'database': 'vineyard_server_template_test',
    'devMode': true,
    'username': '',
    'password': '',
    'dialect': 'postgres'
  }
}
