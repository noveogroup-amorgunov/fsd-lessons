import type { Request, Response } from 'express'

export async function latestProducts(req: Request, res: Response) {
  const products = await req.app.prisma.product.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
    take: 10,
  })

  res.json(products)
}
