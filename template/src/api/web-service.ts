import {Version} from 'vineyard-lawn'
import {Model} from '../model'
import {GenericWebService} from 'vineyard-village'
import {Config, Village} from '../village'
import {initializeEndpoints} from "./endpoints"

const versions = [new Version(1, 0)]

export class WebService extends GenericWebService<Model, Config> {
  constructor(village: Village) {
    super(village, versions)
    initializeEndpoints(this)
  }
}
