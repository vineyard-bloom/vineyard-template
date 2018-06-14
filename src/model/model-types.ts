export type User = {
  username: string
  email: string
  password: string
  emailVerified: boolean
  twoFactorSecret: string
  twoFactorEnabled: boolean
}
