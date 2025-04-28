import { Button } from '@monorepo/react-core/uikit'
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import type { FormEvent } from 'react'
import { PokemonCard } from '~/entities/pokemon'
import { Input } from '~/shared/ui/Input'
import { queryAtom, selectedPokemonId, selectedPokemonResource } from '../model/store'

export const HomePage = reatomComponent(() => {
  const query = queryAtom() 
  const ready = selectedPokemonResource.ready()
  const data = selectedPokemonResource.data()
  const error = selectedPokemonResource.error()

  const handleSubmit = wrap((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    selectedPokemonId(Number(query))
  })

  return (
    <main data-fsd="page/home" className="flex-grow dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold">Home page</h1>
      <div className="flex flex-col gap-4 my-10">
        <h2>Fetch a pokemon by id</h2>
        <form onSubmit={handleSubmit} className="max-w-[300px]">
          <Input type="text" value={query} onChange={wrap((e) => { queryAtom(e.currentTarget.value) })} />
          <Button disabled={!ready} type="submit">{ready ? 'Load a pokemon by id' : 'Loading...'}</Button>
        </form>
      </div>
      <div className="flex gap-4">
        <PokemonCard data={data} isLoading={!ready} error={error} />
      </div>
    </main>
  )
})
