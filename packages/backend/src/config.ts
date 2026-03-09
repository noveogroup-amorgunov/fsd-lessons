import process from 'node:process'
import { z, ZodError } from 'zod'

const envVariablesSchema = z.object({
  PORT: z.coerce.number().positive().default(3000),
  TOKEN_SECRET: z.string().min(1),
  TOKEN_EXPIRATION: z.string().regex(/^\d+(h|m)$/).default('1h').transform(val => val as `${number} ${'h' | 'm'}`),
  DATABASE_URL: z.string().url().min(1),
})

let env: z.infer<typeof envVariablesSchema>

try {
  env = envVariablesSchema.parse(process.env)
}
catch (err) {
  console.error(
    'Env vars is invalid, check schema in the "@/shared/lib/env.ts"',
  )

  if (err instanceof ZodError) {
    console.error(err.errors)
  }

  throw err
}

export const config = {
  port: env.PORT,
  tokenSecret: env.TOKEN_SECRET,
  tokenExpiration: env.TOKEN_EXPIRATION,
  databaseUrl: env.DATABASE_URL,
}
