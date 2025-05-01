// FIXME: split into files
export * as baseApi from './base/endpoints'
export { ApiError } from './base/errors'
export { fecthBaseApi } from './base/fetchBaseApi'
export { baseApiAccessToken } from './base/store'
export type { SessionDto, UserDto } from './base/types'

export { fecthPokemonApi } from './pokemon/fecthPokemonApi'
export type { PokemonDto } from './pokemon/types'
