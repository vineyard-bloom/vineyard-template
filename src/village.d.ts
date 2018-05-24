import { Model } from './model/model';
import { FullConfig } from '../config/config-types';
import { Logic } from './logic/logic';
import { BackingServices } from './backing-services/backing-services';
import { ApiContract } from './endpoints/generated/api-contract';
export interface Village {
    config: FullConfig;
    backingServices: BackingServices;
    model: Model;
    logic: Logic;
    apiContract: ApiContract;
}
export declare function createVillage(config?: FullConfig, backingServiceOverrides?: Partial<BackingServices>): Village;
