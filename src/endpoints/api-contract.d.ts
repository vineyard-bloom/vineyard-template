import { CreatePizzaRequest, CreatePizzaResponse, GetPizzaRequest, GetPizzaResponse } from './endpoint-types';
export interface ApiContract {
    createPizza: (req: CreatePizzaRequest) => Promise<CreatePizzaResponse>;
    getPizza: (req: GetPizzaRequest) => Promise<GetPizzaResponse>;
}
