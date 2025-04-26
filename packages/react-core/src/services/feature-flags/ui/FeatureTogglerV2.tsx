import { GearIcon } from '@radix-ui/react-icons'
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import type { FeatureFlagsAtom } from '../model/store'
import { featureFlags } from '../model/store'
import { useDialog } from '../../dialog-manager'

const FeatureTogglerDialog = reatomComponent(() => {
  const toggleFlag = wrap((featureFlag: string) => {
    featureFlags.toggle(featureFlag as keyof FeatureFlagsAtom)
  })

  return (
    <div>
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

export const FeatureTogglerV2 = reatomComponent(() => {
  const { show } = useDialog(FeatureTogglerDialog)
  return (
    <div className="flex">
      <button onClick={() => show({ title: 'Feature flags' })} className="cursor-pointer">
        <GearIcon width={24} height={24} />
      </button>
    </div>
  )
})
