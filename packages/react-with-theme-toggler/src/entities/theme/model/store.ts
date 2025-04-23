import { atom } from '@reatom/core'
import { withLocalStorage } from '@monorepo/react-core/lib/reatom'
import type { Theme } from './types'

const initialValue = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export const theme = atom<Theme>(initialValue, 'theme')
  .actions(target => ({
    toggle: () => target(state => state === 'light' ? 'dark' : 'light'),
  }))
  .extend(withLocalStorage('theme'))
