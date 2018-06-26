module.exports = {
  apps: [
    {
      name: 'api',
      script: './scripts/start-api.js',
      instances: 1,
      watch: true
    },
    {
      name: 'bitcoin-deposit-monitor',
      script: './scripts/bitcoin-daemons.js deposit',
      instances: 1,
      watch: true
    },
    {
      name: 'bitcoin-address-generator',
      script: './scripts/bitcoin-daemons.js address',
      instances: 1,
      watch: true
    },
    {
      name: 'ethereum-address-generator',
      script: './scripts/ethereum-daemons.js address',
      instances: 1,
      watch: true
    },
    {
      name: 'ethereum-deposit-monitor',
      script: './scripts/ethereum-daemons.js deposit',
      instances: 1,
      watch: true
    },
    {
      name: 'token-deposit-monitor',
      script: './scripts/token-daemons.js deposit',
      instances: 1,
      watch: true
    }
  ]
}
