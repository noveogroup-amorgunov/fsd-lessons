import { reatomComponent } from '@reatom/react'
import { Dialog as DialogWrapper } from '../../ui/Dialog'
import { closeDialog, dialogs } from '../model/store'

export const DialogManagerProvider = reatomComponent(() => {
  return dialogs().map(({ Component, props }, index) => (
    <DialogWrapper
      key={Component.displayName ?? Component.name ?? index}
      open={true}
      title={props.title}
      onOpenChange={(open) => {
        if (!open) {
          closeDialog(Component)
        }
      }}
    >
      <Component
        {...props}
        onClose={() => closeDialog(Component)}
      />
    </DialogWrapper>
  ))
}, 'DialogManagerProvider')
