import { computed, withAsync, wrap } from '@reatom/core'
import { featureFlags } from '~/entities/feature-flags'
import type { FeatureFlags } from './store'
import { localStorageKey } from './store'

export const featureFlagsResource = computed(async () => {
  // Emulate loading feature flags from api
  const featureFlagsFromApi = await wrap(new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        darkTheme: true,
        fsdDebugMode: true,
        navbarV2: false,
      })
    }, 1000)
  })) as Promise<FeatureFlags>

  const featuresFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey) || '{}')

  const features = {
    ...featureFlagsFromApi,
    ...featuresFromLocalStorage,
  }

  featureFlags(features)
}, 'featureFlagsResource').extend(withAsync())
