import { Pizza } from '../model/model-types';
export declare function mapPizzaToApiPizza(p: Pizza): Promise<{
    id: string;
    type: string;
    size: number;
    price: number;
}>;
