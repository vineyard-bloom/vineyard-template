import { Request } from 'vineyard-lawn'

export const emptyPreprocessor = (request: Request) => Promise.resolve(request)
