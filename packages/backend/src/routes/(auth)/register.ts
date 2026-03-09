import type { Request, Response } from 'express'
import crypto from 'node:crypto'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import { config } from '../../config'
import { mapUser } from '../../formatters/mapUser'

const registerBodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
})

export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body

  const { success, error } = registerBodySchema.safeParse(req.body)

  if (!success) {
    res.status(400).json({ message: 'Validation error', errors: error.errors })
    return
  }

  const alreadyExists = await req.app.prisma.user.findUnique({
    where: { email },
  })

  if (alreadyExists) {
    res.status(400).json({ message: 'User already exists' })
    return
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  // TODO: encrypt refresh token with jwt
  const refreshToken = crypto.randomBytes(64).toString('hex')
  const user = await req.app.prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      refreshToken,
      cart: {
        create: {
          version: 1,
          items: [],
        },
      },
    },
  })

  const payload = mapUser(user)

  const accessToken = jwt.sign(payload, config.tokenSecret, {
    expiresIn: config.tokenExpiration,
  })

  res.status(201).json({ user: payload, accessToken, refreshToken })
}
