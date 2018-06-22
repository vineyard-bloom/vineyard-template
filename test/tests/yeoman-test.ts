import { assert, expect } from 'chai'
import * as path from "path"
import * as fs from "fs"
import { exec } from 'shelljs'
var chai = require('chai')
var chaiHttp = require('chai-http')
chai.use(chaiHttp)

require('source-map-support').install()

const helpers = require('yeoman-test')

function assertExists(filePath: string) {
  assert(fs.statSync(filePath).isFile())
}

const appGeneratorPath = path.resolve('generators/app')
const tempPath = path.resolve('test/temp')

describe('yeoman', function () {

  const village = createVillage()
startApiServer(village)

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
        exec('yarn tsc')
      })
      .then(() => {
        chai.request()
          .get('/status/shallow')
          .end((err: any, res: any) => {
            expect(err).to.be.null
            expect(res).to.include('ok')
          })
      })
      // .then(() => {
      //   assertExists('package.json')
      // })
  })

})
