import { startApiServer } from '../src/api/api-server'
import { createVillage } from '../src/village'

const village = createVillage()
startApiServer(village)
