import { Model } from '../model/model';
import { FullConfig } from '../../config/config-types';
import { AddressLogic } from './address-logic';
import { BitcoinLogic } from './bitcoin-logic';
import { EthereumLogic } from './ethereum-logic';
export interface Logic {
    address: AddressLogic;
    bitcoin: BitcoinLogic;
    ethereum: EthereumLogic;
}
export declare function createLogic(model: Model, config: FullConfig): Logic;
