import * as Generator from 'yeoman-generator'

class VineyardGenerator extends Generator {

  constructor(args: any, opts: any) {
    super(args, opts)
  }

  copyBundle(path: string, context: any) {
    this.fs.copyTpl(
      this.templatePath(path),
      this.destinationPath(''),
      context
    )
  }

  copyCommon() {
    this.copyBundle('common', {})
  }
}

module.exports = VineyardGenerator