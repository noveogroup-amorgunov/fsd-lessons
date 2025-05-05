import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { Dialog as DialogWrapper } from '~/shared/ui/Dialog'
import { dialogs } from '../model/store'

export const DialogManagerProvider = reatomComponent(() => {
  return dialogs().map(({ Component, props }, index) => (
    <DialogWrapper
      key={Component.displayName ?? Component.name ?? index}
      open={true}
      title={props.title}
      onOpenChange={wrap((open) => {
        if (!open) {
          dialogs.close(Component)
        }
      })}
    >
      <Component
        {...props}
        onClose={wrap(() => dialogs.close(Component))}
      />
    </DialogWrapper>
  ))
}, 'DialogManagerProvider')
