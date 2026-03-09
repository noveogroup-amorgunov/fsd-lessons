import { action, atom, withLocalStorage } from '@reatom/core'

const localStorageVersion = 'v3'
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
  .extend((target) => {
    return {
      toggle: action ((featureFlag: keyof FeatureFlags) => {
        target.set(state => ({ ...state, [featureFlag]: !state[featureFlag] }))
      }, `${target.name}.toggle`),
    }
  })
  .extend(withLocalStorage(localStorageKey))
