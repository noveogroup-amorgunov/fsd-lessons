import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { dialogs } from '../model/store'
import { Dialog as DialogWrapper } from '../../../shared/ui/Dialog'

export const DialogManagerProvider = reatomComponent(() => {
  return dialogs().map(({ Component, props }, index) => (
    <DialogWrapper
      key={Component.displayName ?? Component.name ?? index}
      open={true}
      title={props.title}
      onCloseAutoFocus={event => {
        event.preventDefault()
        props.triggerRef?.current?.focus()
      }}
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
