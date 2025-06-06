// FIXME: fix absolute ~ imports
import { withLocalStorage } from '../../../shared/lib/reatom'
import { atom } from '@reatom/core'
import type { Theme } from './types'

const initialValue = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export const theme = atom<Theme>(initialValue, 'theme')
  .extend(withLocalStorage('theme'))
