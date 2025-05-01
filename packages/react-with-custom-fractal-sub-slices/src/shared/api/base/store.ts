import { withLocalStorage } from '@monorepo/react-core/lib/reatom'
import { atom } from '@reatom/core'

export const baseApiAccessToken = atom<string>('', 'baseApiAccessToken')
  .extend(withLocalStorage('baseApiAccessToken'))
