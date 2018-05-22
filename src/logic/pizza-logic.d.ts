import { Pizza, PizzaType } from '../model/model-types';
import { Omit, UUID } from 'vineyard-data/src/core-types';
import { PizzaCollection } from '../model/index';
export declare class PizzaLogic {
    private readonly pizzaCollection;
    private readonly pizzaPrices;
    constructor(pizzaCollection: PizzaCollection, pizzaPrices: Map<PizzaType, number>);
    createPizza(createPizzaData: CreatePizzaData): Promise<Pizza>;
    getPizza(pizzaId: UUID): Promise<Pizza>;
    indexPizza(): Promise<Pizza[]>;
    calculatePrice(type: PizzaType, size: number): number;
}
export declare type CreatePizzaData = Omit<Pizza, 'price' | 'id'>;
