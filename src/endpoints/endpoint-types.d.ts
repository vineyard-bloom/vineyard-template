import { Request } from 'vineyard-lawn';
import { PizzaType } from '../model/model-types';
import { UUID } from 'vineyard-data/src/core-types';
export interface CreatePizzaRequest extends Request {
    data: {
        type: PizzaType;
        size: number;
    };
}
export declare type CreatePizzaResponse = ApiPizza;
export interface GetPizzaRequest extends Request {
    data: {
        pizzaId: UUID;
    };
}
export declare type GetPizzaResponse = ApiPizza;
export interface ApiPizza {
    id: UUID;
    type: string;
    size: number;
    price: number;
}
export interface EmptyRequest extends Request {
    readonly data: Empty;
}
export interface Empty {
    _?: undefined;
}
