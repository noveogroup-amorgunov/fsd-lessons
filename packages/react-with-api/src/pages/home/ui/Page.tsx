import { Button } from '@monorepo/react-core/uikit'
import { atom, computed, withAsyncData, wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import type { FormEvent } from 'react'
import { PokemonCard } from '~/entities/pokemon'
import { Input } from '~/shared/ui/Input'
import { queryAtom } from '../model/store'
import { queryPokemonById } from '~/entities/pokemon/api/queryPokemonById'
import { AlertDialog } from '@monorepo/react-core/ui'
import { dialogs } from '@monorepo/react-core/services/dialog-manager'


export const selectedPokemonId = atom(35, 'selectedPokemonId')

export const pokemonResource = computed(async () => {
  const pokemonId = selectedPokemonId()

  try {
    const data = await wrap(queryPokemonById(pokemonId))
    return data
  } catch (error) {
    // @ts-expect-error fix reatom actions
    dialogs.open(AlertDialog, {
      title: 'Error',
      message: 'Failed to fetch pokemon',
      onClose: wrap(() => {
        dialogs.close(AlertDialog)
      }),
    })

    throw error
  }
}, 'pokemonResource').extend(withAsyncData(null))

export const HomePage = reatomComponent(() => {
  const query = queryAtom() 
  const ready = pokemonResource.ready()
  const data = pokemonResource.data()
  const error = pokemonResource.error()

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
