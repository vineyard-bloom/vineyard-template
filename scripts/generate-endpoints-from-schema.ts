import { configureJsonSchemaGeneration } from 'vineyard-janus'
import { realConfig } from '../config/config'
import * as path from 'path'
const schemaValidators = require('../src/endpoints/schema-validators.json')

const wd = path.join(__dirname, '..', 'src')
const { sourceDir, targetDir } = realConfig.janusEndpoints
const generator = configureJsonSchemaGeneration(wd + targetDir, wd + sourceDir, schemaValidators)
generator.compileAll()
