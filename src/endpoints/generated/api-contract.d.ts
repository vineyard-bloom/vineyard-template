import { CreatePizzaRequest, CreatePizzaResponse, GetPizzaRequest, GetPizzaResponse, IndexPizzaRequest, IndexPizzaResponse } from './endpoint-types';
export interface ApiContract {
    createPizza: (req: CreatePizzaRequest) => Promise<CreatePizzaResponse>;
    getPizza: (req: GetPizzaRequest) => Promise<GetPizzaResponse>;
    indexPizza: (req: IndexPizzaRequest) => Promise<IndexPizzaResponse>;
}
