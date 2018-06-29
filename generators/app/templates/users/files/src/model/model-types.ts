export type PostgresData = {
  id: string
  created: string
  modified: string
}

export type PostgresDataCustomId = {
  created: string
  modified: string
}

export type User = UserData & PostgresData

export type UserData = {
  email: string
  password: string
  emailVerified: boolean
  twoFactorSecret: string
  twoFactorEnabled: boolean
}

export type EmailVerificationData = {
  user: string
  code: string
}

export type EmailVerification = EmailVerificationData & PostgresData

export type OnetimecodeData = {
  user: string
  code: string
  available: boolean
}

export type Onetimecode = OnetimecodeData & PostgresData

export type SessionData = {
  sid: string
  user: string
  expires: string
  data: string
}

export type Session = SessionData & PostgresDataCustomId

export type TempPasswordData = {
  user: string
  password: string
}

export type TempPassword = TempPasswordData & PostgresDataCustomId
