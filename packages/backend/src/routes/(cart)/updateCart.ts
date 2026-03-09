import type { Request, Response } from 'express'
import type { Product } from 'generated/prisma'

interface Body {
  version: number
  items: Array<{
    product: Product
    quantity: number
  }>
}

export async function updateCart(req: Request, res: Response) {
  const { user } = req
  const { items, version } = req.body as Body

  if (!user) {
    res.status(500).json({ message: 'Internal server error' })
    return
  }

  await req.app.prisma.cart.update({
    where: { userId: user.id },
    data: {
      version,
      items: items.map(({ product, quantity }) => ({
        productId: product.id,
        quantity,
      })),
    },
  })

  res.json({})
}
