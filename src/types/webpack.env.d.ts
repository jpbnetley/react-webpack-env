/// <reference types="webpack/env" />

interface ImportMetaEnv {
  readonly name: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}