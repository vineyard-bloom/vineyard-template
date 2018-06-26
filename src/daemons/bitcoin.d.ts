import { Cron } from 'vineyard-cron';
import { BitcoinService } from '../services/bitcoin/bitcoin-service';
import { BitcoinConfig } from '../../config/config-types';
export declare class BitcoinDaemons {
    private bitcoinService;
    private bitcoinConfig;
    constructor(bitcoinConfig: BitcoinConfig, bitcoinService: BitcoinService);
    address(): Cron;
    deposit(): Cron;
}
