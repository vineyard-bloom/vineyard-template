
export type StringMap = { [key: string]: string }

export interface UserAnswers {
  projectName: string
  description: string
  includeLawn: boolean
  includeUsers: boolean
  includeMinotaur: boolean
}

export interface PackageConfig {
  projectName: string
  description: string
  dependencies: StringMap
  devDependencies: StringMap
}

export interface LawnContext {
  snippets: StringMap
}

export interface Features {
  lawn: LawnContext | undefined
  minotaur: boolean
  users: boolean
}

export interface CommonContext {
  packageConfig: PackageConfig,
  features: Features
}