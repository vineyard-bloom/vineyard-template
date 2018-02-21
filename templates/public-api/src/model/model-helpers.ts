import { HasId } from './model-types'

export function throwIfUndefined<T extends HasId> (t: T | undefined): T {
  if (t) return t as T
  throw new Error(`Expected existing record, but none found.`)
}
