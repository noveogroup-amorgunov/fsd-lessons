import type { PokemonDto } from '~/shared/api'
import { fetchPokemonApi } from '~/shared/api'
import { mapPokemonDto } from '../lib/mapPokemonDto'

// Usually this function is provided by data-fetching library (Apollo GraphQL, RTKQ, TanStack Query)
// To map external DTO to client-side entity you should locate this query (or mutation) on entity layer,
// because external API don't know anything about client-side entity
export async function queryPokemonById(pokemonId: number) {
  const dto = await fetchPokemonApi<PokemonDto>(`/pokemon/${pokemonId}`)

  return mapPokemonDto(dto)
}
