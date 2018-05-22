import { PizzaType } from '../src/model/model-types'

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

export interface JanusEndpointsConfig {
  sourceDir: string,
  targetDir: string,
  stubMode: boolean,
  endpointForSchema: string
}

export interface FullConfig {
  pizzaPrices: Map<PizzaType, number>
  api: ApiConfig
  database: DatabaseConfig
  janusEndpoints: JanusEndpointsConfig
}
