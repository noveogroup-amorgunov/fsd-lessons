import type { FeatureFlagsAtom } from '../model/store'
import { featureFlags } from '../model/store'

export function useFeatureFlag(featureFlag: keyof FeatureFlagsAtom) {
  const features = featureFlags()

  return features[featureFlag]
}
