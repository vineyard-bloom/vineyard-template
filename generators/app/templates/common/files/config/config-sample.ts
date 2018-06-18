import { FullConfig } from './config-types'

export const config: FullConfig = {
<%- features.lawn ? features.lawn.snippets['config-sample'] : '' %>
  database: {
    host: 'localhost',
    database: '',
    devMode: true,
    username: '',
    password: '',
    dialect: 'postgres'
  }
}