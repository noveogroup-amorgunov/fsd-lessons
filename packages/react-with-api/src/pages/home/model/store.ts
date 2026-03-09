import { dialogs } from '@monorepo/react-core/services/dialog-manager'
import { AlertDialog } from '@monorepo/react-core/ui'
import { atom, computed, withAsyncData } from '@reatom/core'
import { DEFAULT_POKEMON_ID, queryPokemonById } from '~/entities/pokemon'

export const queryAtom = atom(String(DEFAULT_POKEMON_ID), 'query')

export const selectedPokemonId = atom(35, 'selectedPokemonId')

export const selectedPokemonResource = computed(async () => {
  const pokemonId = selectedPokemonId()

  try {
    const data = await queryPokemonById(pokemonId)
    return data
  }
  catch (error) {
    dialogs.open(AlertDialog, {
      title: 'Error',
      message: 'Failed to fetch pokemon',
      onClose: () => {
        dialogs.close(AlertDialog)
      },
    })

    throw error
  }
}, 'selectedPokemonResource').extend(withAsyncData({ initState: undefined }))
