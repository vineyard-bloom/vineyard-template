import {Collection} from 'vineyard-ground'
import {ExchangeRate, Account, User, Stats, BitcoinTransaction, EthereumTransaction} from "./types"
import {ModelInterface} from "vineyard-village"

export interface Model extends ModelInterface {
    Account: Collection<Account>
    User: Collection<User>
    ExchangeRate: Collection<ExchangeRate>
    BitcoinTransaction: Collection<BitcoinTransaction>
    EthereumTransaction: Collection<EthereumTransaction>
    Stats: Collection<Stats>
    Bitcoin: Collection<any>
    File: Collection<any>
    Transaction: Collection<any>
}
