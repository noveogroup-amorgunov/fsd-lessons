import { wait } from '~/shared/lib/wait'
import { ApiError } from './errors'
import { baseApiAccessToken } from './store'

// FIXME: move to env variable
const BASE_URL = 'http://localhost:3000/api'

type Options = {
  body?: Record<string, unknown>
  headers?: Record<string, string>
  method?: string
}

export async function fecthBaseApi<T>(endpoint: string, options: Options = {}): Promise<T> {
  const accessToken = baseApiAccessToken()

  if (accessToken) {
    options.headers = {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
    }
  }

  await wait(600)

  const response = await fetch(BASE_URL + endpoint, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  })

  // TODO: Add 401 error handling

  if (!response.ok) {
    throw new ApiError('Failed to fetch Pokémon data', await response.json())
  }

  return await response.json() as T
}
