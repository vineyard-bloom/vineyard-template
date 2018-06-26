import { Cron } from 'vineyard-cron'
import { scheduleCron } from './helpers'
import { BitcoinService } from '../services/bitcoin/bitcoin-service'
import { BitcoinConfig } from '../../config/config-types'

export class BitcoinDaemons {
  private bitcoinService: BitcoinService
  private bitcoinConfig: BitcoinConfig
  constructor (bitcoinConfig: BitcoinConfig, bitcoinService: BitcoinService) {
    this.bitcoinService = bitcoinService
    this.bitcoinConfig = bitcoinConfig
  }

  address (): Cron {
    return scheduleCron(
      () => this.bitcoinService.generateAddress(),
      this.bitcoinConfig.cron.address,
      'Bitcoin Address Generation'
    )
  }

  deposit (): Cron {
    return scheduleCron(
      () => this.bitcoinService.depositMonitorUpdate(),
      this.bitcoinConfig.cron.depositMonitor,
      'Bitcoin Deposit Monitoring'
    )
  }
}
