export interface ApiConfig {
  port: number,
  ssl: {
    enabled: boolean,
    publicFile: string,
    privateFile: string
  },
  cookies: {
    secret: string,
    maxAge: number,
    secure: boolean
    rolling: boolean
  }
}

export interface DatabaseConfig {
  host: string,
  database: string,
  devMode: boolean,
  username: string,
  password: string,
  dialect: string
}

export interface FullConfig {
  api: ApiConfig
  database: DatabaseConfig
}
