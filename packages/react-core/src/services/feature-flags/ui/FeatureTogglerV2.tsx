import { GearIcon } from '@radix-ui/react-icons'
import { reatomComponent } from '@reatom/react'
import { useDialog } from '../../dialog-manager'
import { FeatureTogglerDialog } from './FeatureTogglerDialog'

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
