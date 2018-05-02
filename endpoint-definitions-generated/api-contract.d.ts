import {
	CreatePizzaRequest,
	GetPizzaRequest,
	CreatePizzaResponse,
	GetPizzaResponse
} from '/Users/aarongreenspan/IbN/VINEYARD/vineyard-server-template/endpoint-definitions-generated/endpoint-types'

export interface ApiActions {
  createPizza: (req: CreatePizzaRequest) => Promise<CreatePizzaResponse>
  getPizza: (req: GetPizzaRequest) => Promise<GetPizzaResponse>
}
