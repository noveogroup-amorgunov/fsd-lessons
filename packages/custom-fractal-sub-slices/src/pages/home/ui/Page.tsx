import { Button } from '@monorepo/react-core/uikit'
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import type { FormEvent } from 'react'
import { PokemonCard, pokemonResource, selectedPokemonId } from '~/entities/pokemon'
import { Input } from '~/shared/ui/Input'
import { queryAtom } from '../model/store'

export const HomePage = reatomComponent(() => {
  const query = queryAtom()
  const ready = pokemonResource.ready()

  const handleSubmit = wrap((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    selectedPokemonId(Number(query))
  })

  return (
    <main data-fsd="page/home" className="flex-grow dark:bg-black dark:text-white p-10">
      <h1 className="text-3xl font-bold">Home page</h1>
      <div data-fsd="page/home/@widget/pokemon-search" className="flex flex-col my-10">
        <div className="flex flex-col gap-4 my-10">
          <h2 className="text-2xl font-bold">Fetch a pokemon by id</h2>
          <form onSubmit={handleSubmit} className="max-w-[300px]">
            <Input type="text" value={query} onChange={wrap((e) => { queryAtom(e.currentTarget.value) })} />
            <Button disabled={!ready} type="submit">{ready ? 'Load a pokemon by id' : 'Loading...'}</Button>
          </form>
        </div>
        <div className="flex gap-4">
          <PokemonCard pokemonId={selectedPokemonId()} />
        </div>
      </div>
      <div data-fsd="page/home/@widget/pokemon-search">
        <h2 className="text-2xl font-bold">Top 5 pokemons in generation 1</h2>
        <div className="flex gap-4">
          123
        </div>
      </div>
    </main>
  )
})
