import { computed, withAsync } from '@reatom/core'
import type { FeatureFlagsAtom } from './store'
import { featureFlags, localStorageKey } from './store'

export const featureFlagsResource = computed(async () => {
  // Emulate loading feature flags from api
  const featureFlagsFromApi = (await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        darkTheme: true,
        fsdDebugMode: true,
        navbarV2: false,
      })
    }, 1000)
  })) as FeatureFlagsAtom

  const featuresFromLocalStorage = JSON.parse(
    localStorage.getItem(localStorageKey) || '{}',
  )

  const features = {
    ...featureFlagsFromApi,
    ...featuresFromLocalStorage.data,
  }

  featureFlags.set(features)
}, 'featureFlagsResource').extend(withAsync())
