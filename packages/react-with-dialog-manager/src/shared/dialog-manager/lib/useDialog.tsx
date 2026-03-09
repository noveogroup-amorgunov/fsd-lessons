import { closeDialog, openDialog } from '../model/store'

type BaseDialogProps = {
  onClose?: () => void
  title?: string
}

export function useDialog<T>(Component: React.ComponentType<T>) {
  const show = (props: T & BaseDialogProps) => openDialog(Component, props)
  const hide = () => closeDialog(Component)

  return {
    show,
    hide,
  }
}
