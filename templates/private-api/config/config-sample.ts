import {FullConfig} from "../src/config-types";

export const localConfig: FullConfig = {
  api: {
    port: 3000
  },
  database: {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "dev",
    database: "typeorm",
    synchronize: true,
    logging: true
  }
}