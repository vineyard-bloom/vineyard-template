import { Pizza } from '../src/model/model-types';
import { CreatePizzaData } from '../src/logic/pizza-logic';
import { Omit } from 'vineyard-data/src/core-types';
export declare function randomCreatePizzaData(): CreatePizzaData;
export declare function randomPizzaToCreate(): Omit<Pizza, 'id'>;
