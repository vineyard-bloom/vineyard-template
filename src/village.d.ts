import { Model } from './model/model';
import { FullConfig } from '../config/config-types';
import { Logic } from './logic/logic';
import { Services } from './services/services';
export interface Village {
    config: FullConfig;
    services: Services;
    model: Model;
    logic: Logic;
}
export declare function createVillage(config?: FullConfig): Village;
