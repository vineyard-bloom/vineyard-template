import * as Generator from 'yeoman-generator'
import { CommonContext, Features, LawnContext, PackageConfig, StringMap, UserAnswers } from "./types";
import { gatherUserInput } from "./user-input";

const fs = require('fs')

function copyBundle(generator: Generator, path: string, context: any) {
  generator.fs.copyTpl(
    generator.templatePath(path),
    generator.destinationPath(''),
    context
  )
}

const featureDependencies: { [key: string]: StringMap } = {
  lawn: {
    "vineyard-lawn": "vineyard-bloom/vineyard-lawn#1.x"
  },
  minotaur: {
    "vineyard-minotaur": "vineyard-bloom/vineyard-minotaur#1.0.0-beta",
  },
  users: {
    "vineyard-users": "vineyard-bloom/vineyard-users#1.x"
  }
}

function loadSnippets(directoryPath: string): StringMap {
  const files = fs.readdirSync(directoryPath)
  const result: StringMap = {}
  for (let filename of files) {
    const basename = filename.match(/[^.]+/)[0]
    result[basename] = fs.readFileSync(directoryPath + '/' + filename, 'utf8')
  }

  return result
}

function prepareDependencies(features: Features): StringMap {
  let result: StringMap = {
    "@types/node": "^7.0.16",
    "source-map-support": "0.5.0",
    "typescript": "2.8.4",
    "vineyard-ground": "vineyard-bloom/vineyard-ground#1.x"
  }

  // Mixin the used Feature Dependencies
  for (let i in featureDependencies) {
    if ((features as any)[i]) {
      result = { ...result, ...featureDependencies[i] }
    }
  }

  return result
}

function newPackageConfig(answers: UserAnswers, features: Features): PackageConfig {
  return {
    projectName: answers.projectName,
    description: answers.description,
    dependencies: prepareDependencies(features),
    devDependencies: {
      "@types/mocha": "^2.2.43",
      "mocha": "^3.2.0",
      "tslint": "^5.8.0",
      "tslint-config-standard": "^7.0.0"
    }
  }
}

// function newLawn(sourcePath: string): LawnContext {
//   return {
//     snippets: loadSnippets(sourcePath + '/lawn/snippets')
//   }
// }

function newCommonContext(answers: UserAnswers, sourcePath: string): CommonContext {
  const features = {
    lawn: answers.includeLawn,
    minotaur: answers.includeMinotaur,
    snippets: loadSnippets(sourcePath + '/common/snippets'),
    users: answers.includeUsers
  }
  return {
    packageConfig: newPackageConfig(answers, features),
    features: features
  }
}

export async function main(generator: Generator) {
  const sourcePath = generator.sourceRoot()
  const answers = await gatherUserInput(generator)
  const context = newCommonContext(answers, sourcePath)
  copyBundle(generator, 'common/files', context)

  if (context.features.lawn)
    copyBundle(generator, 'lawn/files', context)
}