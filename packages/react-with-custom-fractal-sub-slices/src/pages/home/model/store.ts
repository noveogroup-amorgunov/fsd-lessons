import { atom } from '@reatom/core'
import { DEFAULT_POKEMON_ID } from '~/entities/pokemon'

export const queryAtom = atom(String(DEFAULT_POKEMON_ID), 'query')
