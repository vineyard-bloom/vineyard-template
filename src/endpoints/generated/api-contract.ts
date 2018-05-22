import {
	CreatePizzaRequest, 
	GetPizzaRequest, 
	IndexPizzaRequest, 
	CreatePizzaResponse, 
	GetPizzaResponse, 
	IndexPizzaResponse 
} from './endpoint-types'

export interface ApiActions {
  createPizza: (req: CreatePizzaRequest) => Promise<CreatePizzaResponse>
	getPizza: (req: GetPizzaRequest) => Promise<GetPizzaResponse>
	indexPizza: (req: IndexPizzaRequest) => Promise<IndexPizzaResponse>
}