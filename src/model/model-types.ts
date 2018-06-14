export type User = {
  email: string
  password: string
  emailVerified: boolean
  twoFactorSecret: string
  twoFactorEnabled: boolean
}

export type db<T> = {
  id: string
}
