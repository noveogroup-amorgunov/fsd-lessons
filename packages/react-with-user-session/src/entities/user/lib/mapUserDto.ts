import type { UserDto } from '~/shared/api/base'
import type { User, UserId } from '../model/types'

export function mapUser(dto: UserDto): User {
  return {
    id: dto.id as UserId,
    email: dto.email,
    name: dto.name,
  }
}
