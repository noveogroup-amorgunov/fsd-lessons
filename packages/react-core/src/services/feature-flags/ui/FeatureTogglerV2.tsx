import { GearIcon } from '@radix-ui/react-icons'
import { reatomComponent } from '@reatom/react'
import { useRef } from 'react'
import { useDialog } from '../../dialog-manager'
import { FeatureTogglerDialog } from './FeatureTogglerDialog'

export const FeatureTogglerV2 = reatomComponent(() => {
  const { show } = useDialog(FeatureTogglerDialog)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="flex">
      <button ref={buttonRef} onClick={() => show({ title: 'Feature flags', triggerRef: buttonRef })} className="cursor-pointer">
        <GearIcon width={24} height={24} />
      </button>
    </div>
  )
})
