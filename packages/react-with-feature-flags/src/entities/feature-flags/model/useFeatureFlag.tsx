import type { FeatureFlags } from './store'
import { featureFlags } from './store'

export function useFeatureFlag(featureFlag: keyof FeatureFlags) {
  const features = featureFlags()

  return features[featureFlag]
}
