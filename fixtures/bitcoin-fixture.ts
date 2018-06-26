import { AddressLogic } from './../src/logic/address-logic'
import { createVillage } from '../src/village'
import { BitcoinCurrency, AddressType } from '../src/model/model-types'

const village = createVillage()
const addressLogic = village.logic.address

export async function createAddress (address: string) {
  return addressLogic.createAddress({
    address: address,
    currency: BitcoinCurrency.id,
    type: AddressType.deposit
  })
}
