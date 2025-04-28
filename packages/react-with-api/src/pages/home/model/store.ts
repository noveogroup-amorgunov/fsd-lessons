import { dialogs } from '@monorepo/react-core/services/dialog-manager'
import { AlertDialog } from '@monorepo/react-core/ui'
import { atom, computed, withAsyncData, wrap } from '@reatom/core'
import { DEFAULT_POKEMON_ID } from '~/entities/pokemon'
import { queryPokemonById } from '~/entities/pokemon/api/queryPokemonById'

export const queryAtom = atom(String(DEFAULT_POKEMON_ID), 'query')

export const selectedPokemonId = atom(35, 'selectedPokemonId')

export const selectedPokemonResource = computed(async () => {
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
}, 'selectedPokemonResource').extend(withAsyncData(null))
