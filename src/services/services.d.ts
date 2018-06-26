import { FullConfig } from '../../config/config-types';
import { BitcoinService } from './bitcoin/bitcoin-service';
import { Logic } from '../logic/logic';
import { EthereumService } from './ethereum/ethereum-service';
export interface Services {
    bitcoin: BitcoinService;
    ethereum: EthereumService;
}
export declare function createServices(config: FullConfig, logic: Logic): Services;
