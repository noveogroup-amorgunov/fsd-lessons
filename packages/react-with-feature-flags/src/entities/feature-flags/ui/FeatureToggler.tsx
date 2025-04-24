import { GearIcon } from '@radix-ui/react-icons'
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { useRef } from 'react'
import type { FeatureFlagsAtom } from '../model/store'
import { featureFlags } from '../model/store'

export const FeatureToggler = reatomComponent(() => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const toggleFlag = wrap((featureFlag: string) => {
    featureFlags.toggle(featureFlag as keyof FeatureFlagsAtom)
  })

  const onOpen = () => {
    dialogRef.current?.showModal()
  }

  const onClose = () => {
    dialogRef.current?.close()
  }

  const closeOnBackDropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const { target, currentTarget } = event
    const dialog = currentTarget
    const isClickedOnBackDrop = target === dialog

    if (isClickedOnBackDrop) {
      onClose()
    }
  }

  return (
    <div>
      <GearIcon onClick={onOpen} width={24} height={24} />
      {/* FIXME: move dialog to external service */}
      <dialog onCancel={onClose} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 backdrop:bg-black/80" ref={dialogRef} onClick={closeOnBackDropClick}>
        <button type="button" onClick={onClose}>close</button>
        <h2 className="text-2xl font-bold">Feature flags</h2>
        {Object.entries(featureFlags()).map(([key, value]) => (
          <div key={key}>
            {key}
            :
            <input type="checkbox" checked={value} onChange={() => toggleFlag(key)} />
          </div>
        ))}
      </dialog>

    </div>
  )
})
