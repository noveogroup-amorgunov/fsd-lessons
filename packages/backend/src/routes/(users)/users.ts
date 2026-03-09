import type { Request, Response } from 'express'
import { mapUser } from '../../formatters/mapUser'
import { prisma } from '../../prisma'

export async function getUsers(req: Request, res: Response) {
  const users = await prisma.user.findMany({})

  res.json(users.map(mapUser))
}
