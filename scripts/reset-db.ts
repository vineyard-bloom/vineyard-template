import { FullConfig } from '../config/config-types'
import { createVillage } from '../src/village'
import { DevModeler } from 'vineyard-ground/source/modeler'
import { testConfig } from '../config/config-test'
import { realConfig } from '../config/config'

async function resetDb(config: FullConfig): Promise<void> {
  const village = createVillage(config)
  const model = village.model
  await (model.ground as DevModeler).regenerate()
  process.exit(0)
}

const resetTestDb = process.argv[2] === "test"

if(resetTestDb) {
  console.log('Resetting test db')
  resetDb(testConfig)
} else {
  console.log('Resetting dev db')
  resetDb(realConfig)
}