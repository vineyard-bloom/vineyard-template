module.exports = {
  apps: [
    {
      name: 'api',
      script: './scripts/start-api.js',
      instances: 1,
      watch: true
    },
    {
      name: 'bitcoin-daemon',
      script: './scripts/bitcoin-daemons.js',
      instances: 1,
      watch: true
    },
    {
      name: 'token-daemon',
      script: './scripts/token-daemons.js',
      instances: 1,
      watch: true
    },
    {
      name: 'ethereum-daemon',
      script: './scripts/ethereum-daemons.js',
      instances: 1,
      watch: true
    }
  ]
}
