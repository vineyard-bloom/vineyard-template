import { BitcoinClient } from 'vineyard-bitcoin';
import { Cron } from 'vineyard-cron';
import { BitcoinLogic } from '../../logic/bitcoin-logic';
import { BitcoinConfig } from '../../../config/config-types';
export declare class BitcoinDaemons {
    private bitcoinClient;
    private bitcoinConfig;
    private bitcoinLogic;
    private depositMonitor;
    constructor(bitcoinClient: BitcoinClient, bitcoinConfig: BitcoinConfig, bitcoinModel: BitcoinLogic);
    initializeDepositMonitor(): Cron;
}
