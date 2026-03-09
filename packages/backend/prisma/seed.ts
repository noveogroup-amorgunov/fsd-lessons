import 'dotenv/config'
import process from 'node:process'
import { PrismaClient } from '../generated/prisma'
import productData from './mocks/products.json'
import { env } from 'prisma/config'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const adapter = new PrismaBetterSqlite3({
  url: env('DATABASE_URL'),
})

const prisma = new PrismaClient({
  adapter,
})

async function main() {
  const products = productData.map((product) => ({
    id: product.id,
    title: product.name,
    subtitle: product.subtitle,
    price: product.price,
    discountPrice: product.discountPrice,
    stocks: product.inStock ? 100 : 0,
    badge: product.badge,
    imageUrl: product.imageUrl[0],
    createdAt: new Date(),
    updatedAt: new Date(),
  }))

  await prisma.product.createMany({
    data: products,
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
