import { ApiPizza } from './endpoint-types'
import { Pizza } from '../model/model-types'

export function mapPizzaToApiPizza(p: Pizza): Promise<ApiPizza> {
  return Promise.resolve({
    id: p.id,
    type: `Pizza type: ${p.type}`,
    size: p.size,
    price: p.price
  })
}