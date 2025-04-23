import { BaseLayout } from '@monorepo/react-core/ui'
import { Link } from 'wouter'
import { ThemeToggler } from '~/entities/theme'

export function BaseLayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout headerSlot={(
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        <ThemeToggler />
      </header>
    )}
    >
      {children}
    </BaseLayout>
  )
}
