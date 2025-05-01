import { atom, computed, withAsyncData, wrap } from '@reatom/core'
import { queryPokemonById } from '../api/queryPokemonById'
import { dialogs } from '@monorepo/react-core/services/dialog-manager'
import { AlertDialog } from '@monorepo/react-core/ui'

export const selectedPokemonId = atom(35, 'selectedPokemonId')

export const pokemonResource = computed(async () => {
  const id = selectedPokemonId()

  try {
    const data = await wrap(queryPokemonById(id))
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
