import type { PokemonDto } from '~/shared/api/pokemon'
import type { Pokemon, PokemonId } from '../model/types'

export function mapPokemonDto(dto: PokemonDto): Pokemon {
  return {
    id: dto.id as PokemonId,
    name: dto.name,
    image: dto.sprites.other.showdown.front_default as string,
  }
}
