import { Button } from '@monorepo/react-core/uikit'

type Props = {
  message: string
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
  onClose?: () => void
}

export function ConfirmDialog({ message, confirmText = 'Yes', cancelText = 'Cancel', onConfirm, onCancel }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <p>{message}</p>
      <div className="flex gap-2">
      <Button onClick={(e) => {
        e.stopPropagation()
        onConfirm()
      }}
      >
        {confirmText}
      </Button>
      <Button onClick={(e) => {
        e.stopPropagation()
        onCancel()
      }}
        >
          {cancelText}
        </Button>
      </div>
    </div>
  )
}
