import { action, atom, withLocalStorage } from '@reatom/core'

export type FeatureFlagsAtom = {
  darkTheme: boolean
  fsdDebugMode: boolean
}

export const featureFlags = atom<FeatureFlagsAtom>({
  darkTheme: true,
  fsdDebugMode: true,
}, 'featureFlags')
  .extend((target) => {
    return {
      toggle: action ((featureFlag: keyof FeatureFlagsAtom) => {
        target.set(state => ({ ...state, [featureFlag]: !state[featureFlag] }))
      }, `${target.name}.toggle`),
    }
  })
  .extend(withLocalStorage('featureFlags'))
