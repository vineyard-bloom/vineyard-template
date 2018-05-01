import { Model } from './model/index';
import { FullConfig } from '../config/config-types';
import { Logic } from './logic/index';
import { BackingServices } from './backing-services/index';
export interface Village {
    config: FullConfig;
    backingServices: BackingServices;
    model: Model;
    logic: Logic;
}
export declare function createVillage(config?: FullConfig, backingServiceOverrides?: Partial<BackingServices>): Village;
