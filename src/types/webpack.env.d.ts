/// <reference types="webpack/env" />

import { EnvSchemaType } from "../utils/env/schema";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchemaType {
    }
  }
}

// empty export required for ts to find global type.
export {}