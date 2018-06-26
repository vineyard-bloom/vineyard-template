import { Collection, Modeler } from 'vineyard-ground'
import { Model } from '../model/model'
import {
  Address,
  EthereumCurrency,
  LastBlock,
  LastBlockData,
  Transaction,
  TransactionData
} from '../model/model-types'
import { blockchain, Currency } from 'vineyard-blockchain'
import { TransactionStatus } from 'vineyard-bitcoin'
import { ExternalTransaction } from 'vineyard-minotaur'

export class EthereumLogic {
  public Address: Collection<Address>
  public LastBlock: Collection<LastBlock>
  public Transaction: Collection<Transaction>
  public currency: Currency
  public model: Modeler

  constructor (model: Model) {
    this.Address = model.Address
    this.LastBlock = model.LastBlock
    this.Transaction = model.Transaction
    this.model = model.ground
    this.currency = EthereumCurrency
  }

  public async shouldTrackTransaction (transaction: ExternalTransaction): Promise<boolean> {
    if (transaction.to) {
      const thisAddress = await this.Address.first({ address: transaction.to, currency: EthereumCurrency.id })
      if (thisAddress) {
        return true
      }
      return false
    }
    return false
  }

  public async onConfirm (transaction: Transaction): Promise<Transaction> {
    return this.setTransactionStatus(transaction, TransactionStatus.accepted)
  }

  public async onSave (transaction: Transaction) {
    // placeholder

    return transaction
  }

  public async getTransactionByTxid (txid: string): Promise<Transaction | null> {
    const tx = await this.Transaction.first({ txid: txid, currency: EthereumCurrency.id }).exec()
    if (!tx) {
      console.log('No transaction found with txid: ' + txid)
      return null
    }
    return tx
  }

  async saveTransaction (transactionData: TransactionData): Promise<Transaction> {
    const tx = await this.Transaction.create(transactionData)
    if (!tx.id) {
      throw new Error('Error saving transaction: ' + transactionData.txid)
    }
    return tx
  }

  async setTransactionStatus (transaction: Transaction, status: blockchain.TransactionStatus): Promise<Transaction> {
    const tx = await this.Transaction.update(transaction, { status: status })
    if (tx.status !== status) {
      throw new Error('Error updating transaction: ' + transaction.txid)
    }
    return tx
  }

  public async listPending (maxBlockIndex: number): Promise<Transaction[]> {
    const sql = `
    SELECT transactions.* FROM transactions
    WHERE status = 0
    AND transactions.currency = :currency
    AND transactions."blockIndex" < :maxBlockIndex`

    return this.model.query(sql, {
      maxBlockIndex: maxBlockIndex,
      currency: EthereumCurrency.id
    })
  }

  public async getLastBlock (): Promise<LastBlock | undefined> {
    const last = await this.LastBlock.first({ currency: EthereumCurrency.id }).exec()
    if (!last) {
      return
    }
    return last
  }

  public async setLastBlock (block: LastBlockData): Promise<LastBlock> {
    const currentLastBlock = await this.getLastBlock()
    let newBlock
    if (currentLastBlock !== undefined) {
      newBlock = await this.LastBlock.update(currentLastBlock.id, block)
    } else {
      newBlock = await this.LastBlock.create(block)
    }
    if (newBlock.blockIndex !== block.blockIndex) {
      throw new Error('Error creating or updating lastblock for ' + EthereumCurrency.name)
    }
    return newBlock
  }
}
