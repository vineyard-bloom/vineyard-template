import { DevModeler } from 'vineyard-ground/source/modeler'
import { createVillage } from '../src/village'
import { batchCreateUsers, createUserFixture } from '../fixtures'

require('source-map-support').install()

const fixtureName = process.argv[2]
const args = process.argv.slice(3)
const village = createVillage()
const model = village.model
const logic = village.logic

const fixtures: any = {
  clean: async () => {
    await (model.ground as DevModeler).regenerate()
    process.exit(0)
  },

  init: async () => {
    await (model.ground as DevModeler).regenerate()
    await createUserFixture(logic.user, 'basicUser')
    await batchCreateUsers(logic.user, 20)
    process.exit(0)
  },

  user: async () => {
    await createUserFixture(logic.user, 'basicUser')
    process.exit(0)
  },

  users: async (quantity: number) => {
    await batchCreateUsers(logic.user, quantity)
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
