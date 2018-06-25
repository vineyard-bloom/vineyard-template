import * as Generator from 'yeoman-generator'
import { main } from "./src/vineyard-generator";

class VineyardGenerator extends Generator {

  constructor(args: any, opts: any) {
    super(args, opts)
  }

  async all() {
    await main(this)
  }
}

module.exports = VineyardGenerator