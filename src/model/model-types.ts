export type User = UserData & { id: string }

export type UserData = {
  email: string
  password: string
  emailVerified: boolean
  twoFactorSecret: string
  twoFactorEnabled: boolean
}
