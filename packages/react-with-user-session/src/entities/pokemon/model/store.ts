import { dialogs } from '@monorepo/react-core/services/dialog-manager'
import { AlertDialog } from '@monorepo/react-core/ui'
import { atom, computed, withAsyncData } from '@reatom/core'
import { queryPokemonById } from '../api/queryPokemonById'

export const selectedPokemonId = atom(35, 'selectedPokemonId')

export const pokemonResource = computed(async () => {
  const id = selectedPokemonId()

  try {
    const data = await queryPokemonById(id)
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
}, 'pokemonResource').extend(withAsyncData({ initState: undefined }))
