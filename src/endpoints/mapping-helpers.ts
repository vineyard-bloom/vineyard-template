import { Pizza, PizzaType } from '../model/model-types'

export function pizzaToApiPizza(p: Pizza): { id: string, type: string, size: number, price: number } {
  return {
    id: p.id,
    type: `Pizza type: ${pizzaTypeToApiPizzaType(p.type)}`,
    size: p.size,
    price: p.price
  }
}

function pizzaTypeToApiPizzaType(type: PizzaType): string {
  switch (type) {
    case PizzaType.cheese:
      return 'cheese'
    case PizzaType.red:
      return 'red'
    case PizzaType.white:
      return 'white'
  }
}

export function fmap<S,T>(f: (s: S) => T ) : (ss: S[] ) => T[] {
  return (ss) => ss.map(f)
}