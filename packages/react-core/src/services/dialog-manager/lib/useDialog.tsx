import { wrap } from '@reatom/core'
import { dialogs } from '../model/store'

type BaseDialogProps = {
  onClose?: () => void
  title?: string
  triggerRef?: React.RefObject<HTMLElement | null>
}

export function useDialog<T>(Component: React.ComponentType<T>) {
  // @ts-expect-error lost type from reatom actions
  const show = wrap((props: T & BaseDialogProps) => dialogs.open(Component, props))
  const hide = wrap(() => dialogs.close(Component))

  return {
    show,
    hide,
  }
}
