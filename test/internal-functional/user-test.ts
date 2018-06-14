import { createUserFixture } from '../../fixtures'
import { createVillage } from '../../src/village'

const village = createVillage()
const userLogic = village.logic.user

describe('User Endpoints', function () {
  it(' can login a user.', async function () {
    const user = await createUserFixture(userLogic, {})
    const databaseUser = await userLogic.getUserById(user.id)
  })
})
