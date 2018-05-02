import {
	CreatePizzaRequest, 
	GetPizzaRequest, 
	CreatePizzaResponse, 
	GetPizzaResponse 
} from './endpoint-types'

export interface ApiActions {
  createPizza: (req: CreatePizzaRequest) => Promise<CreatePizzaResponse>
	getPizza: (req: GetPizzaRequest) => Promise<GetPizzaResponse>
}