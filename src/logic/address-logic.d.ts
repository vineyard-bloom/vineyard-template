import { Model } from '../model/model';
import { Address, AddressData } from '../model/model-types';
export declare class AddressLogic {
    model: Model;
    constructor(model: Model);
    createAddress(addressData: AddressData): Promise<Address>;
}
