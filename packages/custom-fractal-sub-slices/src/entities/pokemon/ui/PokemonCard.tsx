import { reatomComponent } from '@reatom/react'
import type { Pokemon } from '../model/types'
import { PokemonCardStub } from './PokemonCardStub'

type Props = {
  data?: Pokemon
  isLoading?: boolean
  error?: Error | null
}

// now PokemonCard has direct connection with pokemonResource
// idk how correct this is, but it's not that important here (we learn api)
export const PokemonCard = reatomComponent((props: Props) => {
  const { data, isLoading, error } = props

  if (isLoading) {
    return (
      <div data-fsd="entity/pokemon/PokemonCard">
        <PokemonCardStub isLoading />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div data-fsd="entity/pokemon/PokemonCard">
        <PokemonCardStub />
      </div>
    )
  }

  return (
    <div className="inline-flex flex-col gap-4 shrink-0" data-fsd="entity/pokemon/PokemonCard">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <img className="w-70 h-70" src={data.image} />
      <p>
        id=
        {data.id}
      </p>
    </div>
  )
})
