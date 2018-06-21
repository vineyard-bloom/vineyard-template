import { BitcoinClient } from 'vineyard-bitcoin'
import { Action, Cron } from 'vineyard-cron'
import { DepositMonitor, DepositMonitorManager } from 'vineyard-minotaur'
import { DepositTransactionHandler } from '../transaction-handler'
import { bitcoinCurrency } from '../../../common/src/model'
import { BitcoinLogic } from '../../logic/bitcoin-logic'
import { BitcoinConfig } from '../../../config/config-types'

export class BitcoinService {
  private bitcoinClient: BitcoinClient
  private bitcoinConfig: BitcoinConfig
  private bitcoinLogic: BitcoinLogic
  private depositMonitor: DepositMonitor

  constructor (
    bitcoinConfig: BitcoinConfig,
    bitcoinLogic: BitcoinLogic
  ) {
    this.bitcoinClient = new BitcoinClient(bitcoinConfig.client)
    const bitcoinDepositMonitorManager = new DepositMonitorManager(
      bitcoinLogic,
      bitcoinCurrency
    )
    const transactionHandler = new DepositTransactionHandler(bitcoinLogic)
    this.depositMonitor = new DepositMonitor(
      bitcoinDepositMonitorManager,
      this.bitcoinClient,
      bitcoinCurrency,
      bitcoinConfig.minimumConfirmations,
      transactionHandler
    )
  }

  public initializeDepositMonitor (): Cron {
    const action = () => this.depositMonitor.update()
    return scheduleCron(
      action,
      this.bitcoinConfig.bitcoinMonitorFrequency,
      'Bitcoin Deposit Monitor'
    )
  }
}

function scheduleCron (action: Action, frequency: number, name: string): Cron {
  console.log(`Prepared to ${name} every ${frequency / 1000} seconds`)
  return new Cron([{ action, name }], frequency)
}
