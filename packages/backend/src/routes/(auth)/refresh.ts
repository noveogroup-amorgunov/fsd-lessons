import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../../config'
import { mapUser } from '../../formatters/mapUser'

export async function refresh(req: Request, res: Response) {
  const { refreshToken } = req.body

  if (!refreshToken) {
    res
      .status(400)
      .json({ message: 'Refresh token required' })
    return
  }

  // Find user by refresh token
  const user = await req.app.prisma.user.findFirst({ where: { refreshToken } })

  if (!user) {
    res
      .status(401)
      .json({ message: 'Invalid refresh token' })
    return
  }

  const accessToken = jwt.sign(
    mapUser(user),
    config.tokenSecret,
    { expiresIn: config.tokenExpiration },
  )

  res
    .status(200)
    .json({ accessToken })
}
