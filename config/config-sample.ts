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
    'client': {
      'port': 18332,
      'user': 'root',
      'pass': 'password1',
      'host': 'http://127.0.0.1'
    },
    'minimumConfirmations': 6,
    'cron': {
      'addressFrequency': 1 * 60 * 1000,
      'depositMonitorFrequency': 5 * 60 * 1000
    }
  },
  'ethereum': {
    'client': {
      'http': 'http://localhost:8080'
    },
    'minimumConfirmations': 12,
    'cron': {
      'addressFrequency': 1 * 60 * 1000,
      'depositMonitorFrequency': 5 * 60 * 1000
    }
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
      'secret': 'blablabla',
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
    'dialect': 'postgres',
    'logging': false
    ,
    'bitcoin': {
      'client': {
        'port': 18332,
        'user': 'root',
        'pass': 'password1',
        'host': 'http://127.0.0.1'
      },
      'minimumConfirmations': 6,
      'cron': {
        'addressFrequency': 1 * 60 * 1000,
        'depositMonitorFrequency': 5 * 60 * 1000
      }
    },
    'ethereum': {
      'client': {
        'http': 'http://localhost:8080'
      },
      'minimumConfirmations': 12,
      'cron': {
        'addressFrequency': 1 * 60 * 1000,
        'depositMonitorFrequency': 5 * 60 * 1000
      }
    }
  }
}
