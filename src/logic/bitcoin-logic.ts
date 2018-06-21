import { Collection } from 'vineyard-ground'
import { Model } from '../model/model'

export class BitcoinLogic {
  public Transaction: Collection<Transaction>
  public LastBlock: Collection<LastBlock>
  constructor (model: Model) {
    this.Transaction = model.Transaction
    this.LastBlock = model.LastBlock
  }
}
