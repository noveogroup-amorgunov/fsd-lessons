import type { FeatureFlagsAtom } from './store'
import { featureFlags } from './store'

export function useFeatureFlag(featureFlag: keyof FeatureFlagsAtom) {
  const features = featureFlags()

  return features[featureFlag]
}
