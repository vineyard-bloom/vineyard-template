import { BitcoinConfig as BitcoinClientConfig } from 'vineyard-bitcoin';
import { Web3EthereumClientConfig as EthereumClientConfig } from 'vineyard-ethereum';
export interface ApiConfig {
    port: number;
    ssl: {
        enabled: boolean;
        publicFile: string;
        privateFile: string;
    };
    cookies: {
        secret: string;
        maxAge: number;
        secure: boolean;
        rolling: boolean;
    };
}
export interface DatabaseConfig {
    host: string;
    database: string;
    devMode: boolean;
    username: string;
    password: string;
    dialect: string;
}
export interface BitcoinConfig {
    client: BitcoinClientConfig;
    minimumConfirmations: number;
    cron: BlockchainCron;
}
export interface EthereumConfig {
    client: EthereumClientConfig;
    minimumConfirmations: number;
    cron: BlockchainCron;
}
export interface BlockchainCron {
    addressFrequency: number;
    depositMonitorFrequency: number;
}
export interface FullConfig {
    api: ApiConfig;
    database: DatabaseConfig;
    bitcoin: BitcoinConfig;
    ethereum: EthereumConfig;
}
