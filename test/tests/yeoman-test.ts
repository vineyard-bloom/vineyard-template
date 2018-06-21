import { assert } from 'chai'
import * as path from "path";
import * as fs from "fs";
import { exec } from 'shelljs';

require('source-map-support').install()

const helpers = require('yeoman-test')

function assertExists(filePath: string) {
  assert(fs.statSync(filePath).isFile())
}

const appGeneratorPath = path.resolve('generators/app')
const tempPath = path.resolve('test/temp')

describe('yeoman', function () {

  it('can generate a minimal project', async function () {
    // Add timeout
    await helpers.run(appGeneratorPath)
      .inDir(tempPath) // This globally modifies the working directory and does not set it back.  Yeah.
      .withPrompts({
        projectName: 'yeoman-test',
        description: 'A test vineyard project using yeoman',
        includeLawn: true
      })
      .withLocalConfig({ lang: 'en' })
      .then(async () => {
        exec('yarn setup')
        exec('touch amber-2.txt')
      })
      .then(() => {
        assertExists('package.json')
      })
  })

})
