export type SessionDto = {
  accessToken: string
  user: {
    email: string
    id: number
  }
}

export type UserDto = {
  id: number
  email: Email
  name: string
}
