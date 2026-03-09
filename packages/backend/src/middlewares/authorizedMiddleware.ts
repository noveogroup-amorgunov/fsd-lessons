import type { NextFunction, Request, Response } from 'express'
import type { User } from 'generated/prisma'
import jwt from 'jsonwebtoken'
import { config } from '../config'

declare global {
  // eslint-disable-next-line ts/no-namespace
  namespace Express {
    interface Request {
      isAuthorized?: boolean
      user?: User
    }
  }
}

export async function authorizedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  try {
    const decoded = jwt.verify(token, config.tokenSecret)

    // @ts-expect-error TODO validate decoded email
    const user = await req.app.prisma.user.findUnique({
      where: { email: decoded.email },
    })

    if (!user) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }

    req.isAuthorized = true
    req.user = user
  }
  catch (error) {
    console.error(error)

    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: 'Access token expired' })
      return
    }

    res.status(401).json({ message: 'Unauthorized' })

    return
  }

  next()
}
