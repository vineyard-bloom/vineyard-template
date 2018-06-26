import { Collection, Modeler } from 'vineyard-ground';
import { Model } from '../model/model';
import { Address, LastBlock, LastBlockData, Transaction, TransactionData } from '../model/model-types';
import { blockchain, Currency } from 'vineyard-blockchain';
import { ExternalTransaction } from 'vineyard-minotaur';
export declare class EthereumLogic {
    Address: Collection<Address>;
    LastBlock: Collection<LastBlock>;
    Transaction: Collection<Transaction>;
    currency: Currency;
    model: Modeler;
    constructor(model: Model);
    shouldTrackTransaction(transaction: ExternalTransaction): Promise<boolean>;
    onConfirm(transaction: Transaction): Promise<Transaction>;
    onSave(transaction: Transaction): Promise<Transaction>;
    getTransactionByTxid(txid: string): Promise<Transaction | null>;
    saveTransaction(transactionData: TransactionData): Promise<Transaction>;
    setTransactionStatus(transaction: Transaction, status: blockchain.TransactionStatus): Promise<Transaction>;
    listPending(maxBlockIndex: number): Promise<Transaction[]>;
    getLastBlock(): Promise<LastBlock | undefined>;
    setLastBlock(block: LastBlockData): Promise<LastBlock>;
}
