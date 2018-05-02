import { CreatePizzaRequest, GetPizzaRequest, CreatePizzaResponse, GetPizzaResponse } from './endpoint-types';
/************************ -- CreatePizza -- *****************************/
export declare function createPizzaRequestDataStub(): Promise<CreatePizzaRequest['data']>;
export declare function createPizzaResponseStub(): Promise<CreatePizzaResponse>;
/************************ -- GetPizza -- *****************************/
export declare function getPizzaRequestDataStub(): Promise<GetPizzaRequest['data']>;
export declare function getPizzaResponseStub(): Promise<GetPizzaResponse>;
