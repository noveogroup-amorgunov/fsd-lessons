import type { Request, Response } from 'express'
import { mapUser } from '../../formatters/mapUser'

export async function getMe(req: Request, res: Response) {
  if (!req.user) {
    res.status(500).json({ message: 'Internal server error' })
    return
  }

  res.json(mapUser(req.user))
}
