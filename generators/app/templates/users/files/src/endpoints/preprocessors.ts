import { Request } from 'vineyard-lawn'
import { UserService } from 'vineyard-users'

export const emptyPreprocessor = async (request: Request) => Promise.resolve(request)

export const versionPreprocessor = (request: Request) => {
  const version = request.version
  if (!version) {
    throw new Error('Missing version property')
  }
}

export const authPreprocessor = (userService: UserService) =>
  async (request: Request) => {
    await userService.require_logged_in(request)
    return Promise.resolve(request)
  }
