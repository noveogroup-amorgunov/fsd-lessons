import { dialogs } from '../model/store'

type BaseDialogProps = {
  onClose?: () => void
  title?: string
  triggerRef?: React.RefObject<HTMLElement | null>
}

export function useDialog<T>(Component: React.ComponentType<T>) {
  const show = (props: T & BaseDialogProps) => dialogs.open(Component, props)
  const hide = () => dialogs.close(Component)

  return {
    show,
    hide,
  }
}
