import type { UserDto } from '~/shared/api'
import type { User, UserId } from '../model/types'

export function mapUser(dto: UserDto): User {
  return {
    id: dto.id as UserId,
    email: dto.email,
    name: dto.name,
  }
}
