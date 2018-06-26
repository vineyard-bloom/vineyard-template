import { DepositTransaction, LastBlock } from 'vineyard-minotaur';
export declare type PostgresData = {
    id: string;
    created: string;
    modified: string;
};
export declare type PostgresDataCustomId = {
    created: string;
    modified: string;
};
export declare type AddressData = {
    currency: number;
    address: string;
    type: number;
};
export declare type Address = AddressData & PostgresData;
export declare enum AddressType {
    deposit = 0,
}
export declare type TransactionData = DepositTransaction;
export declare type Transaction = TransactionData & PostgresData;
export declare type LastBlockData = LastBlock;
export declare type LastBlock = LastBlockData & PostgresData;
export declare const BitcoinCurrency: {
    id: number;
    name: string;
};
export declare const EthereumCurrency: {
    id: number;
    name: string;
};
