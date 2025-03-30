import { EnvSchema, EnvSchemaType } from "./schema";

export function initEnvironment(){
  const { success, error } = EnvSchema.safeParse({ 
    name: process.env.name
   } satisfies Partial<EnvSchemaType>)  

  if  (!success) throw `init env error: ${error}`
}