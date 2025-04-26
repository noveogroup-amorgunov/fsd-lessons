import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import type { FeatureFlagsAtom } from '../model/store'
import { featureFlags } from '../model/store'

export const FeatureTogglerDialog = reatomComponent(() => {
  const toggleFlag = wrap((featureFlag: string) => {
    featureFlags.toggle(featureFlag as keyof FeatureFlagsAtom)
  })

  return (
    <div className="flex flex-col gap-1 mt-4">
      {Object.entries(featureFlags()).map(([key, value]) => (
        <div key={key}>
          {key}
          :
          <input type="checkbox" checked={value} onChange={() => toggleFlag(key)} />
        </div>
      ))}
    </div>
  )
})
