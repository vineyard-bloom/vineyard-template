import { Web3EthereumClient as EthereumClient } from 'vineyard-ethereum'
import { Action, Cron } from 'vineyard-cron'
import { DepositMonitor, DepositMonitorManager } from 'vineyard-minotaur'
import { EthereumLogic } from '../../logic/ethereum-logic'
import { EthereumConfig } from '../../../config/config-types'
import { EthereumCurrency } from '../../model/model-types'

export class EthereumService {
  public depositMonitor: DepositMonitor
  public EthereumClient: EthereumClient
  private ethereumLogic: EthereumLogic
  private ethereumConfig: EthereumConfig

  constructor (
    ethereumConfig: EthereumConfig,
    ethereumLogic: EthereumLogic
  ) {
    this.ethereumConfig = ethereumConfig
    this.EthereumClient = new EthereumClient(ethereumConfig.client)
    this.ethereumLogic = ethereumLogic
    // Will need to make a small change to depositmonitor to only accept one logic
    // DepositMonitorManager and TransactionHandler are classes that only interface with
    // The db transaction lastblock and account or addresses table
    // Separating these seems less useful than earlier iterations
    this.depositMonitor = new DepositMonitor(
      ethereumLogic,
      this.EthereumClient,
      EthereumCurrency,
      ethereumConfig.minimumConfirmations,
      ethereumLogic
    )
  }

  depositMonitorUpdate () {
    return this.depositMonitor.update()
  }

  generateAddress () {
    if (this.ethereumConfig.stub === true) {
      return this.EthereumClient.createTestAddress()
    }
    return this.EthereumClient.createAddress()
  }
}
