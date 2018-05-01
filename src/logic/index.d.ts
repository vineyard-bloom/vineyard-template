import { PizzaLogic } from './pizza-logic';
import { Model } from '../model/index';
import { FullConfig } from '../../config/config-types';
export interface Logic {
    pizzaLogic: PizzaLogic;
}
export declare function createLogic(model: Model, config: FullConfig): Logic;
