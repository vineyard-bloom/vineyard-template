import { CreatePizzaRequest, GetPizzaRequest, IndexPizzaRequest, CreatePizzaResponse, GetPizzaResponse, IndexPizzaResponse } from './endpoint-types';
/************************ -- CreatePizza -- *****************************/
export declare function createPizzaRequestDataStub(): Promise<CreatePizzaRequest['data']>;
export declare function createPizzaResponseStub(): Promise<CreatePizzaResponse>;
/************************ -- GetPizza -- *****************************/
export declare function getPizzaRequestDataStub(): Promise<GetPizzaRequest['data']>;
export declare function getPizzaResponseStub(): Promise<GetPizzaResponse>;
/************************ -- IndexPizza -- *****************************/
export declare function indexPizzaRequestDataStub(): Promise<IndexPizzaRequest['data']>;
export declare function indexPizzaResponseStub(): Promise<IndexPizzaResponse>;
