import * as assert from 'assert'
import { BitcoinClient } from 'vineyard-bitcoin'
import { BitcoinLab } from 'vineyard-bitcoin/lab'
import { testConfig } from '../../config/config.js'
import { createVillage } from '../../src/village'
import { BitcoinCurrency } from '../../src/model/model-types'

const bitcoinLabConfig = {
  client: testConfig.bitcoin.client,
  walletPath: '../helpers'
}

const testVillage = createVillage(testConfig)
const model = testVillage.model
const bitcoinClient = new BitcoinClient(testConfig.bitcoin.client)
const bitcoinLab = new BitcoinLab(bitcoinLabConfig, bitcoinClient)
const bitcoinLogic = testVillage.logic.bitcoin
const addressLogic = testVillage.logic.address
const bitcoinService = testVillage.services.bitcoin

const getBestBlockHash = async function () {
  const client = bitcoinClient.getClient()
  return new Promise((res, rej) =>
    client.cmd('getbestblockhash', function (err: Error, blockhash: string) {
      if (err) {
        rej(err)
      }
      res(blockhash)
    })
  )
}

describe('Bitcoin Deposit Monitor', function () {
  this.timeout(80000000)
  it('can pick up deposit transactions', async function () {
    // Set Bitcoin lastblock
    await bitcoinLab.start()
    const bestBlockhash = await getBestBlockHash()
    const bestBlock = await bitcoinClient.getBlock(bestBlockhash as string)
    await bitcoinLogic.setLastBlock({
      blockIndex: bestBlock.height,
      currency: BitcoinCurrency.id
    })

    // Create address
    const bitcoinAddress = await bitcoinService.generateAddress()
    const newAddress = await addressLogic.createAddress({
      address: bitcoinAddress,
      currency: BitcoinCurrency.id,
      type: 1
    })

    // Send Bitcoin and mine blocks
    await bitcoinLab.generate(1)
    const txid = await bitcoinClient.send(0.00001, bitcoinAddress)
    await bitcoinLab.generate(1)
    const tx = await bitcoinClient.getTransaction(txid)
    await bitcoinService.depositMonitorUpdate()

    const dbTransaction = await bitcoinLogic.getTransactionByTxid(txid)
    assert(dbTransaction.id)
  })
})
