import { BitcoinClient } from 'vineyard-bitcoin';
import { DepositMonitor } from 'vineyard-minotaur';
import { BitcoinLogic } from '../../logic/bitcoin-logic';
import { BitcoinConfig } from '../../../config/config-types';
export declare class BitcoinService {
    depositMonitor: DepositMonitor;
    bitcoinClient: BitcoinClient;
    private bitcoinLogic;
    private bitcoinConfig;
    constructor(bitcoinConfig: BitcoinConfig, bitcoinLogic: BitcoinLogic);
    depositMonitorUpdate(): Promise<void>;
    generateAddress(): Promise<string>;
}
