import { ApiPizza } from './endpoint-types';
import { Pizza } from '../model/model-types';
export declare function mapPizzaToApiPizza(p: Pizza): Promise<ApiPizza>;
