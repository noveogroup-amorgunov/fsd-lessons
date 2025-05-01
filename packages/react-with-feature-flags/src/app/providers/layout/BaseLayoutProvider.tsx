import { ThemeToggler } from '@monorepo/react-core/services/theme'
import { BaseLayout } from '@monorepo/react-core/ui'
import { reatomComponent } from '@reatom/react'
import { Link } from 'wouter'

export const BaseLayoutProvider = reatomComponent(({ children }: { children: React.ReactNode }) => {
  return (
    <BaseLayout headerSlot={(
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggler />
        </div>
      </header>
    )}
    >
      {children}
    </BaseLayout>
  )
})
