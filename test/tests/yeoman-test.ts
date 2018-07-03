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

  it('can generate a lawn project', async function () {
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
        assert.file(['package.json', 'scripts/api.ts', 'config/config.ts', '.gitignore', 'node_modules/vineyard-lawn/source/api.ts'])
      })
  })

  it('can generate a lawn/users project', async function () {
    this.timeout(120000)
    await helpers.run(appGeneratorPath)
      .inDir(tempPath) // This globally modifies the working directory and does not set it back.  Yeah.
      .withPrompts({
        projectName: 'yeoman-test',
        description: 'A test vineyard project using yeoman',
        includeLawn: true,
        includeUsers: true
      })
      .withLocalConfig({ lang: 'en' })
      .then(() => {
        assert.file(['scripts/api.ts', 'fixtures/user-fixture.ts', 'src/logic/user-logic.ts'])
      })
  })
})
