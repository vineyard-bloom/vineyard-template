import { BitcoinService } from '../src/services/bitcoin/bitcoin-service'
import { config } from '../config/config'
import { createVillage } from '../src/village'
import { BitcoinDaemons } from '../src/daemons/bitcoin'

const daemonName = process.argv[2]
const args = process.argv.slice(3)
const village = createVillage(config)
const bitcoinService = village.services.bitcoin
const bitcoinDaemons = new BitcoinDaemons(config.bitcoin, bitcoinService)

const daemons: any = {
  address: bitcoinDaemons.address().start(),
  deposit: bitcoinDaemons.deposit().start()
}

if (!daemonName) {
  console.error('Missing daemon name.')
} else if (!daemons[daemonName]) {
  console.error('There is no daemon named "' + daemonName + '"')
} else {
  console.log('Running daemon', daemonName + '.')
  daemons[daemonName](...args)
}
