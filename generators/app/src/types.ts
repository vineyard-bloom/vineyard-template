export interface VineyardAnswers {
  projectName: string
  description: string
}

export interface PackageConfig {
  projectName: string
  description: string
  dependencies: object
  devDependencies: object

}

export interface CommonContext {
  packageConfig: PackageConfig
}