import { withLocalStorage } from '@monorepo/react-core/lib/reatom'
import { atom } from '@reatom/core'

const localStorageVersion = 'v2'

export type FeatureFlagsAtom = {
  darkTheme: boolean
  fsdDebugMode: boolean
  navbarV2: boolean
}

// FIXME: make every feature flag a separate atom
export const featureFlags = atom<FeatureFlagsAtom>({
  darkTheme: true,
  fsdDebugMode: true,
  navbarV2: false,
}, 'featureFlags')
  .actions(target => ({
    toggle: (featureFlag: keyof FeatureFlagsAtom) => target((state) => {
      return { ...state, [featureFlag]: !state[featureFlag] }
    }),
  }))
  .extend(withLocalStorage(`featureFlags.${localStorageVersion}`))
