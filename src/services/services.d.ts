import { FullConfig } from '../../config/config-types';
import { BitcoinService } from './bitcoin/bitcoin-service';
import { Logic } from '../logic/logic';
export interface Services {
    bitcoin: BitcoinService;
}
export declare function createServices(config: FullConfig, logic: Logic): Services;
