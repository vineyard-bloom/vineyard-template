import * as assert from 'assert'
import { Web3EthereumClient as EthereumClient } from 'vineyard-ethereum'
import { EthereumLab } from 'vineyard-ethereum/lab'
import { testConfig } from '../../config/config.js'
import { createVillage } from '../../src/village'
import { EthereumCurrency } from '../../src/model/model-types'

const ethereumLabConfig = {
  client: testConfig.bitcoin.client,
  walletPath: '../helpers'
}

const testVillage = createVillage(testConfig)
const model = testVillage.model
const ethereumClient = new EthereumClient(testConfig.ethereum.client)
const ethereumLab = new EthereumLab(ethereumLabConfig, ethereumClient)
const ethereumLogic = testVillage.logic.ethereum
const addressLogic = testVillage.logic.address
const ethereumService = testVillage.services.ethereum

describe('Ethereum Deposit Monitor', function () {
  this.timeout(80000000)
  it('can pick up deposit transactions', async function () {
    // Set Ethereum lastblock
    await ethereumLab.start()
    const bestBlock = await ethereumClient.getBlock('latest')
    await ethereumLogic.setLastBlock({
      blockIndex: bestBlock.height,
      currency: EthereumCurrency.id
    })

    // Create address
    const ethereumAddress = await ethereumService.generateAddress()
    const newAddress = await addressLogic.createAddress({
      address: ethereumAddress,
      currency: EthereumCurrency.id,
      type: 1
    })

    // Send Ethereum and mine blocks
    await ethereumLab.generate(1)
    const transaction = await ethereumClient.send('', ethereumAddress, '1')
    await ethereumLab.generate(1)
    const tx = await ethereumClient.getTransaction(transaction.txid)
    await ethereumService.depositMonitorUpdate()

    const dbTransaction = await ethereumLogic.getTransactionByTxid(txid)
    assert(dbTransaction!.id)
  })
})
