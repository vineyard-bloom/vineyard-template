require('source-map-support').install()
import "reflect-metadata"
import {createVillage} from "../src/village"
import {startApiServer} from "../src/api"

async function main() {
  const village = await createVillage()
  startApiServer(village)
}

main()