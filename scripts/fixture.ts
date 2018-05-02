import { DevModeler } from 'vineyard-ground/source/modeler'

require('source-map-support').install()
import { createVillage } from '../src/village'
import { configureJsonSchemaGeneration } from 'vineyard-janus'
import * as path from 'path'

const village = createVillage()
const model = village.model

const fixtureName = process.argv[2]
const args = process.argv.slice(3)

const fixtures: any = {
  init: async () => {
    await (model.ground as DevModeler).regenerate()
  },

  endpoints: async () => {
    const wd = path.join(__dirname, '..', 'src')
    const { sourceDir, targetDir, helpersFile } = village.config.janusEndpoints
    const generator = await configureJsonSchemaGeneration(wd + targetDir, wd + sourceDir, wd + helpersFile)
    await generator.compileAll()
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
