import { withLocalStorage } from '@monorepo/react-core/lib/reatom'
import { atom } from '@reatom/core'

const localStorageVersion = 'v4'
export const localStorageKey = `featureFlags.${localStorageVersion}`

export type FeatureFlags = {
  darkTheme: boolean
  fsdDebugMode: boolean
  navbarV2: boolean
}

// FIXME: make every feature flag a separate atom
export const featureFlags = atom<FeatureFlags>({
  darkTheme: true,
  fsdDebugMode: true,
  navbarV2: false,
}, 'featureFlags')
  .actions(target => ({
    toggle: (featureFlag: keyof FeatureFlags) => target((state) => {
      return { ...state, [featureFlag]: !state[featureFlag] }
    }),
  }))
  .extend(withLocalStorage(localStorageKey))
