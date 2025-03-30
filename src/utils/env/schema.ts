import { z } from 'zod'

export const EnvSchema = z.object({
  name: z.string().optional()
})

export type EnvSchemaType = z.infer<typeof EnvSchema>