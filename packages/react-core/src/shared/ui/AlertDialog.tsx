import { Button } from '@monorepo/react-core/uikit'

export function AlertDialog({ message, onClose }: { message: string, onClose?: () => void }) {
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
