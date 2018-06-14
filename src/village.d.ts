import { Model } from './model/model';
import { FullConfig } from '../config/config-types';
import { BackingServices } from './backing-services/backing-services';
export interface Village {
    config: FullConfig;
    backingServices: BackingServices;
    model: Model;
}
export declare function createVillage(config?: FullConfig, backingServiceOverrides?: Partial<BackingServices>): Village;
