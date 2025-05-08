import { fecthBaseApi } from './fetchBaseApi'
import type { SessionDto, UserDto } from './types'

export function login(formData: { email: Email, password: string }) {
  return fecthBaseApi<SessionDto>('/login', {
    body: formData,
    method: 'POST',
  })
}

export function me() {
  return fecthBaseApi<UserDto>('/me')
}
