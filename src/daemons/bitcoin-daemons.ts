import { BitcoinLogic } from '../logic/bitcoin-logic'
import { BitcoinService } from '../backing-services/bitcoin/bitcoin-service'

export class BitcoinDaemons {
  bitcoinLogic: BitcoinLogic
  bitcoinService: BitcoinService
  constructor (bitcoinLogic: BitcoinLogic, bitcoinService: BitcoinService) {
    this.bitcoinLogic = bitcoinLogic
    this.bitcoinService = bitcoinService
  }

  public depositMonitor () {

  }

  public addressGenerator () {

  }
}
