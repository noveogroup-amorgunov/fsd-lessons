import { FeatureTogglerV2, useFeatureFlag } from '@monorepo/react-core/services/feature-flags'
import { ThemeToggler } from '@monorepo/react-core/services/theme'
import { BaseLayout } from '@monorepo/react-core/ui'
import { reatomComponent } from '@reatom/react'
import { Link } from 'wouter'
import { isAuthorized, LogoutButton } from '~/entities/session'
import { LoginDialogTrigger } from '~/widgets/LoginDialog'

export const BaseLayoutProvider = reatomComponent(({ children }: { children: React.ReactNode }) => {
  const darkThemeIsEnabled = useFeatureFlag('darkTheme')

  return (
    <BaseLayout headerSlot={(
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-4">
          <Link href="/">Home</Link>
          {isAuthorized() && <Link href="/profile">Profile</Link>}
        </nav>
        <div className="flex items-center gap-4">
          {darkThemeIsEnabled && <ThemeToggler />}
          <FeatureTogglerV2 />
          {isAuthorized() && <LogoutButton />}
          {!isAuthorized() && <LoginDialogTrigger />}
        </div>
      </header>
    )}
    >
      {children}
    </BaseLayout>
  )
})
