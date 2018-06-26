import { Model } from '../model/model'
import { FullConfig } from '../../config/config-types'
import { AddressLogic } from './address-logic'
import { BitcoinLogic } from './bitcoin-logic'
import { EthereumLogic } from './ethereum-logic'

export interface Logic {
  address: AddressLogic
  bitcoin: BitcoinLogic
  ethereum: EthereumLogic
}

export function createLogic (model: Model, config: FullConfig): Logic {
  return {
    address: new AddressLogic(model),
    bitcoin: new BitcoinLogic(model),
    ethereum: new EthereumLogic(model)
  }
}
