import {Model} from './model'
import {GenericVillage, CommonConfig} from 'vineyard-village'
import {compareConfigs} from 'vineyard-village'

const config = require('../config/config.json')

export interface Config extends CommonConfig {

}

compareConfigs("config.json", config, "config-sample.json", require('../config/config-sample.json'))

export class Village extends GenericVillage<Model, Config> {

  constructor() {
    super({
      config: config,
      schema: require('./model/schema.json')
    })
  }
}