// TODO: Add Zod validation parsing
export class ApiError extends Error {
  constructor(message: string, public body: { message: string }) {
    super(message)

    this.body = body
  }
}
