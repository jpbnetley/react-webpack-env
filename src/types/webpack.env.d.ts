/// <reference types="webpack/env" />

interface CustomEnv {
  readonly name?: string
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends CustomEnv {
    }
  }
}

// empty export required for ts to find global type.
export {}