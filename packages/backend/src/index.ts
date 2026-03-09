/* eslint-disable perfectionist/sort-imports */
import 'dotenv/config'
import process from 'node:process'
import { app } from './app'

const port = process.env.PORT || 3000

async function main() {
  // eslint-disable-next-line no-console
  console.log('Starting server...')
  await app.prisma.$connect()

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
  })
}

main()
