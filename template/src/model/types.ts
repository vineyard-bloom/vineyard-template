export interface Account {
    id: number
    client: number
    bitcoinAddress: string
    salt: number
    extraBitcoin: number
    ethereumWithdrawalAddress: string
    ethereumDepositAddress: string
}

export enum IdentityVerification {
    unneeded,
    required,
    pending,
    invalid,
    verified,
}

export interface User {
    username: string
    password?: string
    account: Account
    two_factor_secret?: string
    two_factor_enabled?: string
    identityVerification: IdentityVerification
}

export interface Stats {
    btcRaised: number
    saltPurchased: number
    currentTier: number
    exchangeRate: number
}

export interface Transaction {
    txid:string
    account: Account | string
    status: number
    index: number
    address: string
    satoshis: number
    usd: number
    salt: number
    timeReceived: Date
}

export interface EthereumTransaction {
    account: Account
    txid: string
    address: string
    status: number
    wei: number
    usd: number
    salt: number
    timeReceived: Date
}

export interface ExchangeRate {
    value: number
}
