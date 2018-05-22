"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vineyard_janus_1 = require("vineyard-janus");
const config_1 = require("../config/config");
const path = require("path");
const schemaValidators = require('../src/endpoints/schema-validators.json');
const wd = path.join(__dirname, 'src');
const { sourceDir, targetDir } = config_1.realConfig.janusEndpoints;
const generator = vineyard_janus_1.configureJsonSchemaGeneration(wd + targetDir, wd + sourceDir, schemaValidators);
generator.compileAll();
//# sourceMappingURL=generate-endpoints-from-schema.js.map