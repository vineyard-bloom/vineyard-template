import { DepositTransaction, LastBlock } from 'vineyard-minotaur'

export type PostgresData = {
  id: string
  created: string
  modified: string
}

export type PostgresDataCustomId = {
  created: string
  modified: string
}

export type AddressData = {
  currency: number
  address: string
  type: number
}

export type Address = AddressData & PostgresData

export enum AddressType {
  deposit
}

export type TransactionData = DepositTransaction

export type Transaction = TransactionData & PostgresData

export type LastBlockData = LastBlock

export type LastBlock = LastBlockData & PostgresData

export const BitcoinCurrency = {
  id: 1,
  name: 'Bitcoin'
}

export const EthereumCurrency = {
  id: 2,
  name: 'Ethereum'
}
