import { FeatureToggler } from '@monorepo/react-core/services/feature-flags'
import { ThemeToggler } from '@monorepo/react-core/services/theme'
import { Button } from '@monorepo/react-core/uikit'
import { useState } from 'react'
import { Dialog } from '~/shared/ui/Dialog'

type AlertDialogProps = {
  title: string
  onButtonClick: () => void
  buttonText?: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

function AlertDialog({ title, onButtonClick, buttonText, open, onOpenChange }: AlertDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} title={title}>
      <div className="flex flex-col gap-4">
        some error text
      </div>
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </Dialog>
  )
}

export function HomePage() {
  const [open, setOpen] = useState(false)

  return (
    <main data-fsd="page/home" className="flex-grow dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold">Home page</h1>
      <p>Any content 123</p>
      <ThemeToggler />
      <FeatureToggler />
      <button onClick={() => setOpen(true)}>Open alert dialog</button>
      <AlertDialog onButtonClick={() => setOpen(false)} title="Some error" buttonText="Close" open={open} onOpenChange={setOpen} />
    </main>
  )
}
