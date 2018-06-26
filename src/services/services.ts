import { FullConfig } from '../../config/config-types'
import { BitcoinService } from './bitcoin/bitcoin-service'
import { Logic } from '../logic/logic'
import { EthereumService } from './ethereum/ethereum-service';

export interface Services {
  bitcoin: BitcoinService
  ethereum: EthereumService
}

export function createServices (config: FullConfig, logic: Logic): Services {
  return {
    bitcoin: new BitcoinService(config.bitcoin, logic.bitcoin),
    ethereum: new EthereumService(config.ethereum, logic.ethereum)
  }
}
