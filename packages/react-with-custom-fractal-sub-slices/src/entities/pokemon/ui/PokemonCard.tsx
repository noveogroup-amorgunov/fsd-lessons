import { reatomComponent } from '@reatom/react'
import { pokemonResource } from '../model/store'
import { PokemonCardStub } from './PokemonCardStub'

type Props = {
  pokemonId: number
}

// now PokemonCard has direct connection with pokemonResource
// idk how correct this is, but it's not that important here (we learn api) 
export const PokemonCard = reatomComponent((props: Props) => {
  const data = pokemonResource.data()
  const ready = pokemonResource.ready()
  const error = pokemonResource.error()

  if (!ready) {
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
    <div className="inline-flex flex-col gap-4" data-fsd="entity/pokemon/PokemonCard">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <img className="w-70 h-70" src={data.image} />
      <p>
        id=
        {props.pokemonId}
      </p>
    </div>
  )
})
