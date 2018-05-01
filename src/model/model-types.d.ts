import { UUID } from 'vineyard-data/src/core-types';
export interface Pizza {
    id: UUID;
    type: PizzaType;
    size: number;
    price: number;
}
export declare enum PizzaType {
    cheese = 0,
    red = 1,
    white = 2,
}
