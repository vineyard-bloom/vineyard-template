import { DevModeler } from 'vineyard-ground/source/modeler'
import { createVillage } from '../src/village'

require('source-map-support').install()


const fixtureName = process.argv[2]
const args = process.argv.slice(3)

const fixtures: any = {
  init: async () => {
    const village = createVillage()
    const model = village.model
    await (model.ground as DevModeler).regenerate()
    process.exit(0)
  }
}

if (!fixtureName) {
  console.error('Missing fixture name.')
} else if (!fixtures[fixtureName]) {
  console.error('There is no fixture named "' + fixtureName + '"')
} else {
  console.log('Running fixture', fixtureName + '.')
  fixtures[fixtureName](...args)
}
