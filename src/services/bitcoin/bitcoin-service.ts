import { BitcoinClient } from 'vineyard-bitcoin'
import { Action, Cron } from 'vineyard-cron'
import { DepositMonitor, DepositMonitorManager } from 'vineyard-minotaur'
import { BitcoinLogic } from '../../logic/bitcoin-logic'
import { BitcoinConfig } from '../../../config/config-types'
import { BitcoinCurrency } from '../../model/model-types'

export class BitcoinService {
  public depositMonitor: DepositMonitor
  public bitcoinClient: BitcoinClient
  private bitcoinLogic: BitcoinLogic
  private bitcoinConfig: BitcoinConfig

  constructor (
    bitcoinConfig: BitcoinConfig,
    bitcoinLogic: BitcoinLogic
  ) {
    this.bitcoinConfig = bitcoinConfig
    this.bitcoinClient = new BitcoinClient(bitcoinConfig.client)
    this.bitcoinLogic = bitcoinLogic
    // Will need to make a small change to depositmonitor to only accept one logic
    // DepositMonitorManager and TransactionHandler are classes that only interface with
    // The db transaction lastblock and account or addresses table
    // Separating these seems less useful than earlier iterations
    this.depositMonitor = new DepositMonitor(
      bitcoinLogic,
      this.bitcoinClient,
      BitcoinCurrency,
      bitcoinConfig.minimumConfirmations,
      bitcoinLogic
    )
  }

  depositMonitorUpdate () {
    return this.depositMonitor.update()
  }

  generateAddress () {
    if (this.bitcoinConfig.stub === true) {
      return this.bitcoinClient.createTestAddress()
    }
    return this.bitcoinClient.createAddress()
  }
}
