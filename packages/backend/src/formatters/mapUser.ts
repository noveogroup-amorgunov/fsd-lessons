import type { User } from 'generated/prisma'

interface OutputUser {
  id: number
  email: string
  name: string
}

export function mapUser(user: User): OutputUser {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
  }
}
