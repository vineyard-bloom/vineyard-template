import { Pizza } from '../model/model-types';
export declare function pizzaToApiPizza(p: Pizza): {
    id: string;
    type: string;
    size: number;
    price: number;
};
export declare function mapf<S, T>(f: (s: S) => T): (ss: S[]) => T[];
