import type { FeatureFlags } from '../model/store'
import { featureFlags } from '../model/store'

export function useFeatureFlag(featureFlag: keyof FeatureFlags) {
  const features = featureFlags()

  return features[featureFlag]
}
