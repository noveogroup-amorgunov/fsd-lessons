import type { Express } from 'express'
import type { PrismaClient } from 'generated/prisma'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { prisma } from './prisma'
import { getRoutes } from './router'

const app: Express = express()

declare global {
  // eslint-disable-next-line ts/no-namespace
  namespace Express {
    interface Application {
      prisma: PrismaClient
    }
  }
}

app.prisma = prisma

app
  .use(express.json())
  .use(cors())
  .use(bodyParser.urlencoded({ extended: false }))
  .use('/api', getRoutes())

export { app }
