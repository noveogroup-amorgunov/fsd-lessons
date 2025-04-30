import { Cross2Icon } from '@radix-ui/react-icons'
import { Dialog as DialogPrimitive } from 'radix-ui'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  title?: string
  onCloseAutoFocus?: (event: Event) => void
}

export function Dialog({ open, onOpenChange, children, title, onCloseAutoFocus }: Props) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/80 data-[state=open]:animate-dialog-overlay-show" />
        <DialogPrimitive.Content onCloseAutoFocus={onCloseAutoFocus} className="fixed max-h-[85vh] w-[90vw] max-w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-dialog-content-show dark:bg-gray-900">
          <div data-fsd="shared/ui/Dialog" className="p-[25px]">
            {title && <DialogPrimitive.Title className="m-0 text-[17px] font-medium">{title}</DialogPrimitive.Title>}
            {children}
            <button
              onClick={(e) => {
                e.stopPropagation()
                onOpenChange(false)
              }}
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full bg-gray-100 focus:shadow-[0_0_0_2px] focus:outline-none dark:bg-gray-600"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
