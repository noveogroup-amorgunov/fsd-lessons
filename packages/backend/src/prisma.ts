import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from '../generated/prisma'
import { config } from './config'

const adapter = new PrismaBetterSqlite3({
  url: config.databaseUrl,
})

export const prisma = new PrismaClient({
  adapter,
})
