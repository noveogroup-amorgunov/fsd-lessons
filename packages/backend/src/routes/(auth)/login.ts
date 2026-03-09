import type { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import { config } from '../../config'
import { mapUser } from '../../formatters/mapUser'

const loginBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export async function login(req: Request, res: Response) {
  const { email, password } = req.body

  const { success, error } = loginBodySchema.safeParse(req.body)

  if (!success) {
    res
      .status(400)
      .json({ message: 'Validation error', errors: error.errors })

    return
  }

  const user = await req.app.prisma.user.findUnique({ where: { email } })

  if (!user) {
    res
      .status(400)
      .json({ message: 'Invalid credentials' })
    return
  }

  try {
    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      res
        .status(400)
        .json({ message: 'Invalid credentials' })

      return
    }

    const payload = mapUser(user)

    const accessToken = jwt.sign(
      payload,
      config.tokenSecret,
      { expiresIn: config.tokenExpiration },
    )
    res.status(200).json({ user: payload, accessToken, refreshToken: user.refreshToken })
  }
  catch {
    res
      .status(500)
      .json({ message: 'Internal server error' })
  }
}
