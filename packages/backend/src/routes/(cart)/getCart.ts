import type { Request, Response } from 'express'

interface CartItem {
  productId: number
  quantity: number
}

export async function getCart(req: Request, res: Response) {
  const { user } = req

  if (!user) {
    res.status(500).json({ message: 'Internal server error' })
    return
  }

  let cart = await req.app.prisma.cart.findUnique({
    where: { userId: user.id },
  })

  if (!cart) {
    cart = await req.app.prisma.cart.create({
      data: {
        userId: user.id,
        version: 1,
        items: [],
      },
    })
  }

  // TODO: add type guard
  const cartItems = cart.items as unknown as CartItem[]
  const productIds = cartItems.map(item => item.productId)
  const products = await req.app.prisma.product.findMany({
    where: { id: { in: productIds } },
  })

  res.json({
    version: cart.version,
    cartItems: cartItems.map(item => ({
      quantity: item.quantity,
      product: products.find(product => product.id === item.productId),
    })),
  })
}
