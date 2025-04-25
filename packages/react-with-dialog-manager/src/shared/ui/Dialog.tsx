import { Cross2Icon } from '@radix-ui/react-icons'
import { Dialog as DialogPrimitive } from 'radix-ui'

/*
<DialogPrimitive.Title className="m-0 text-[17px] font-medium">
  Edit profile
</DialogPrimitive.Title>
<DialogPrimitive.Description className="mb-5 mt-2.5 text-[15px] leading-normal">
  Make changes to your profile here. Click save when you're done.
</DialogPrimitive.Description>
<fieldset className="mb-[15px] flex items-center gap-5">
  <label
    className="w-[90px] text-right text-[15px]"
    htmlFor="name"
  >
    Name
  </label>
  <input
    className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
    id="name"
    defaultValue="Pedro Duarte"
  />
</fieldset>
<fieldset className="mb-[15px] flex items-center gap-5">
  <label
    className="w-[90px] text-right text-[15px] text-violet11"
    htmlFor="username"
  >
    Username
  </label>
  <input
    className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
    id="username"
    defaultValue="@peduarte"
  />
</fieldset>
<div className="mt-[25px] flex justify-end">
  <DialogPrimitive.Close asChild>
    <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 outline-none outline-offset-1 hover:bg-green5 focus-visible:outline-2 focus-visible:outline-green6 select-none">
      Save changes
    </button>
  </DialogPrimitive.Close>
</div>
*/

/*
<fieldset className="mb-[15px] flex items-center gap-5 mt-5">
  <label
    className="w-[90px] text-right text-[15px]"
    htmlFor="name"
  >
    Name
  </label>
  <input
    className="inline-flex text-black h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] dark:text-white"
    id="name"
    defaultValue="Pedro Duarte"
  />
</fieldset>
*/

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  title?: string
}

export function Dialog({ open, onOpenChange, children, title }: Props) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {/* <DialogPrimitive.Trigger asChild>
        <button>
          Edit profile
        </button>
      </DialogPrimitive.Trigger> */}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/80 data-[state=open]:animate-dialog-overlay-show" />
        <DialogPrimitive.Content className="fixed max-h-[85vh] w-[90vw] max-w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-dialog-content-show dark:bg-gray-900">
          {title && <DialogPrimitive.Title className="m-0 text-[17px] font-medium">{title}</DialogPrimitive.Title>}
          {children}
          <DialogPrimitive.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full bg-gray-100 focus:shadow-[0_0_0_2px] focus:outline-none dark:bg-gray-600"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
