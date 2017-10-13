import {Model} from './model'
import {GenericVillage, CommonConfig, loadLabConfig, loadAndCheckConfig} from 'vineyard-village'

export interface LabConfig {

}

export interface Config extends CommonConfig {

}

export class Village extends GenericVillage<Model, Config> {
  labConfig: LabConfig = loadLabConfig<LabConfig>()

  constructor() {
    super()
  }

  getLabConfig(): LabConfig {
    return this.labConfig
  }

}