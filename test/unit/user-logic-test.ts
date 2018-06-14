import { createUserFixture } from '../../fixtures'
import { createVillage } from '../../src/village'

const village = createVillage()
const userLogic = village.logic.user

describe('User Logic', function () {
  it(' can create and get a user.', async function () {
    const createdUser = await createUserFixture(userLogic, {})
    const gotUser = await userLogic.getUserById(createdUser.id)
    assert(createdUser.id && gotUser.id)
  })
})
