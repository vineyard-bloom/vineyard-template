import { Model } from '../model/model'
import { Address, AddressData } from '../model/model-types'

export class AddressLogic {
  model: Model

  constructor (model: Model) {
    this.model = model
  }

  async createAddress (addressData: AddressData): Promise<Address> {
    const address = await this.model.Address.create(addressData)
    if (!address.id) {
      throw new Error('Error creating address: ' + addressData.address)
    }

    return address
  }
}
