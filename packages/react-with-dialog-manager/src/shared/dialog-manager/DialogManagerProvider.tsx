import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { createContext } from 'react'
import { createPortal } from 'react-dom'
import { Dialog as DialogWrapper } from '../ui/Dialog'
import { dialogs } from './store'
import type { DialogManagerItem } from './types'

const DialogManagerContext = createContext<DialogManagerItem[]>([])

export const DialogManagerProvider = reatomComponent(({ children }: { children?: React.ReactNode }) => {
  const portalRootElement = document.getElementById('root-dialogs')

  if (!portalRootElement) {
    throw new Error('DialogManagerProvider: #root-dialogs element not found')
  }

  return (
    <DialogManagerContext value={dialogs()}>
      {children}
      {createPortal(
        <>
          {dialogs().map(({ Component, open, props }) => (
            <DialogWrapper
              key={Component.name}
              open={open}
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
          ))}
        </>,
        portalRootElement,
      )}

    </DialogManagerContext>
  )
})
