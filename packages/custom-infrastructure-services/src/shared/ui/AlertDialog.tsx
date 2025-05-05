import { Button } from '@monorepo/react-core/uikit'

type Props = {
  message: string
  onClose?: () => void
}

export function AlertDialog({ message, onClose }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <p>{message}</p>
      <Button onClick={(e) => {
        e.stopPropagation()
        onClose?.()
      }}
      >
        Okay
      </Button>
    </div>
  )
}
