import { withLocalStorage } from '../../../shared/lib/reatom'
import { atom } from '@reatom/core'

export type FeatureFlagsAtom = {
  darkTheme: boolean
  fsdDebugMode: boolean
}

export const featureFlags = atom<FeatureFlagsAtom>({
  darkTheme: true,
  fsdDebugMode: true,
}, 'featureFlags')
  .actions(target => ({
    toggle: (featureFlag: keyof FeatureFlagsAtom) => target((state) => {
      return { ...state, [featureFlag]: !state[featureFlag] }
    }),
  }))
  .extend(withLocalStorage('featureFlags'))
