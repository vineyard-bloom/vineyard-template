import { CreatePizzaRequest, CreatePizzaResponse, GetPizzaRequest, GetPizzaResponse } from './endpoint-types';
import { PizzaLogic } from '../logic/pizza-logic';
export declare function createPizza(pizzaLogic: PizzaLogic, req: CreatePizzaRequest): Promise<CreatePizzaResponse>;
export declare function getPizza(pizzaLogic: PizzaLogic, req: GetPizzaRequest): Promise<GetPizzaResponse>;
