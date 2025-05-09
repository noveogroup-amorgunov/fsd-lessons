import { reatomComponent } from '@reatom/react'
import { PokemonCard, PokemonCardStub } from '~/entities/pokemon'
import { strongestPokemonResource } from '../model/store'

export const StrongestPokemonsSlider = reatomComponent(() => {
  const strongestPokemons = strongestPokemonResource.data()
  const strongestPokemonsReady = strongestPokemonResource.ready()

  return (
    <div data-fsd="page/home/@widget/strongest-pokemons" className="flex flex-col my-10">
      <h2 className="text-2xl font-bold">Top 5 strongest pokemons</h2>
      <div className="flex gap-4 overflow-x-auto my-10">
        {strongestPokemonsReady
          ? (
              strongestPokemons?.map(pokemon => (
                <PokemonCard key={pokemon.id} data={pokemon} isLoading={false} error={null} />
              ))
            )
          : (
              <>
                <PokemonCardStub />
                <PokemonCardStub />
                <PokemonCardStub />
              </>
            )}
      </div>
    </div>
  )
}, 'StrongestPokemonsSlider')
