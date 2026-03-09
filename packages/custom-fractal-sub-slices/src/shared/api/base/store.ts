import { atom, withLocalStorage } from '@reatom/core'

export const baseApiAccessToken = atom<string>('', 'baseApiAccessToken').extend(
  withLocalStorage('baseApiAccessToken'),
)
