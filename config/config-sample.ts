import { FullConfig } from './config-types'

export const fakeConfig: FullConfig = {
  'api': {
    'port': 3000,
    'ssl': {
      'enabled': false,
      'publicFile': '',
      'privateFile': ''
    },
    'cookies': {
      'secret': 'blablabla',
      'maxAge': 10000,
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
  },
  'bitcoin': {
    'stub': false,
    'client': {
      'port': 18332,
      'user': 'root',
      'pass': 'password1',
      'host': 'http://127.0.0.1'
    },
    'minimumConfirmations': 6,
    'cron': {
      'address': 1 * 60 * 1000,
      'depositMonitor': 5 * 60 * 1000
    }
  },
  'ethereum': {
    'stub': false,
    'client': {
      'http': 'http://localhost:8080'
    },
    'minimumConfirmations': 12,
    'cron': {
      'address': 1 * 60 * 1000,
      'depositMonitor': 5 * 60 * 1000
    }
  }
}

export const testConfig: FullConfig = {
  'api': {
    'port': 3000,
    'ssl': {
      'enabled': false,
      'publicFile': '',
      'privateFile': ''
    },
    'cookies': {
      'secret': 'blablabla',
      'maxAge': 10000,
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
  },
  'bitcoin': {
    'stub': true,
    'client': {
      'port': 18332,
      'user': 'root',
      'pass': 'password1',
      'host': 'http://127.0.0.1'
    },
    'minimumConfirmations': 6,
    'cron': {
      'address': 1 * 60 * 1000,
      'depositMonitor': 5 * 60 * 1000
    }
  },
  'ethereum': {
    'stub': true,
    'client': {
      'http': 'http://localhost:8080'
    },
    'minimumConfirmations': 12,
    'cron': {
      'address': 1 * 60 * 1000,
      'depositMonitor': 5 * 60 * 1000
    }
  }
}
