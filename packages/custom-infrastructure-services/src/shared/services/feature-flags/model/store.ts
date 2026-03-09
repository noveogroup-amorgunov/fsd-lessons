import { action, atom, withLocalStorage } from '@reatom/core'

const localStorageVersion = 'v4'
export const localStorageKey = `featureFlags.${localStorageVersion}`

export type FeatureFlagsAtom = {
  darkTheme: boolean
  fsdDebugMode: boolean
  navbarV2: boolean
}

// FIXME: make every feature flag a separate atom
export const featureFlags = atom<FeatureFlagsAtom>(
  {
    darkTheme: true,
    fsdDebugMode: true,
    navbarV2: true,
  },
  'featureFlags',
)
  .extend((target) => {
    return {
      toggle: action((featureFlag: keyof FeatureFlagsAtom) => {
        target.set((state) => ({
          ...state,
          [featureFlag]: !state[featureFlag],
        }))
      }, `${target.name}.toggle`),
    }
  })
  .extend(withLocalStorage(localStorageKey))
