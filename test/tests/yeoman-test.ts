import { assert } from 'chai'
import * as path from "path"
import * as fs from "fs"
import { exec } from 'shelljs'

require('source-map-support').install()
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

const appGeneratorPath = path.resolve('generators/app')
const tempPath = path.resolve('test/temp')

describe('yeoman', function () {

  it('can generate a minimal project', async function () {
    this.timeout(120000)
    await helpers.run(appGeneratorPath)
      .inDir(tempPath) // This globally modifies the working directory and does not set it back.  Yeah.
      .withPrompts({
        projectName: 'yeoman-test',
        description: 'A test vineyard project using yeoman',
        includeLawn: true
      })
      .withLocalConfig({ lang: 'en' })
      .then(() => {
        exec('yarn setup')
      })
      .then(() => {
        assert.file(['package.json', 'scripts/api.ts', 'src/model.ts', 'config/config.ts', '.gitignore', 'node_modules/vineyard-lawn/source/api.ts'])
      })
  })

})
