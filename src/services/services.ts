import { FullConfig } from '../../config/config-types'
import { BitcoinService } from './bitcoin/bitcoin-service'
import { Logic } from '../logic/logic'

export interface Services {
  bitcoin: BitcoinService
}

export function createServices (config: FullConfig, logic: Logic): Services {
  return {
    bitcoin: new BitcoinService(config.bitcoin, logic.bitcoin)
  }
}
