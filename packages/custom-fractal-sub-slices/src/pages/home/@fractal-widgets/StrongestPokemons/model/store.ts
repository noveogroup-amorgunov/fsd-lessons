import { computed, withAsyncData, wrap } from '@reatom/core'
import { queryPokemonById } from '~/entities/pokemon/api/queryPokemonById'

const STRONGEST_POKEMONS_IDS = [
  34, // Nidoking
  65, // Alakazam
  132, // Ditto
  150, // Mewtwo
  151, // Mew
]

export const strongestPokemonResource = computed(async () => {
  const data = await wrap(
    Promise.all(STRONGEST_POKEMONS_IDS.map(id => queryPokemonById(id))),
  )

  return data
}, 'strongestPokemonResource').extend(withAsyncData(null))
