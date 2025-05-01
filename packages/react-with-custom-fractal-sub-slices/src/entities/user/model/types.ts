export type UserId = Brand<Id, 'UserId'>

export type User = {
  id: UserId
  email: Email
  name: string
}
