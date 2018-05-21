import { Pizza } from '../model/model-types'

export function mapPizzaToApiPizza(p: Pizza): Promise<{ id: string, type: string, size: number, price: number }> {
  return Promise.resolve({
    id: p.id,
    type: `Pizza type: ${p.type}`,
    size: p.size,
    price: p.price
  })
}