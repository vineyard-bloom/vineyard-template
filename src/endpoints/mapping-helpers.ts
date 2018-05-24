import { Pizza } from '../model/model-types'

export function pizzaToApiPizza(p: Pizza): { id: string, type: string, size: number, price: number } {
  return {
    id: p.id,
    type: `Pizza type: ${p.type}`,
    size: p.size,
    price: p.price
  }
}

export function fmap<S,T>(f: (s: S) => T ) : (ss: S[] ) => T[] {
  return (ss) => ss.map(f)
}