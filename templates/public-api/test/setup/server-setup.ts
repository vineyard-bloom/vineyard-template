import { DevModeler } from 'vineyard-ground/source/modeler'
import { createVillage, Village } from '../../src/village'

const villageForModel = createVillage()
const model = villageForModel.model

beforeEach(async function () {
  await resetDb()
})

export async function resetDb () {
  await (model.ground as DevModeler).regenerate()
}

export const defaultVillage = { village: villageForModel }
