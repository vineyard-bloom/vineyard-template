import {ConnectionOptions} from "typeorm";

export interface ApiConfig {
  port: number
}

export interface FullConfig {
  api: ApiConfig
  database: ConnectionOptions
}