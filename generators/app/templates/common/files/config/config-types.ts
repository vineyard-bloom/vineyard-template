<%- features.lawn ? features.lawn.snippets['config-types'] : '' %>

export interface DatabaseConfig {
  host: string,
  database: string,
  devMode: boolean,
  username: string,
  password: string,
  dialect: string
}

export interface FullConfig {
  <%- features.lawn ? 'api: ApiConfig,' : '' %>
  database: DatabaseConfig
}
