import { Web3EthereumClient as EthereumClient } from 'vineyard-ethereum';
import { DepositMonitor } from 'vineyard-minotaur';
import { EthereumLogic } from '../../logic/ethereum-logic';
import { EthereumConfig } from '../../../config/config-types';
export declare class EthereumService {
    depositMonitor: DepositMonitor;
    EthereumClient: EthereumClient;
    private ethereumLogic;
    private ethereumConfig;
    constructor(ethereumConfig: EthereumConfig, ethereumLogic: EthereumLogic);
    depositMonitorUpdate(): Promise<void>;
    generateAddress(): any;
}
