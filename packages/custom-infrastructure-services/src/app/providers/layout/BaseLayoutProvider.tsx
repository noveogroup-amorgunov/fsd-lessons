import { BaseLayout } from '@monorepo/react-core/ui'
import { reatomComponent } from '@reatom/react'
import { Link } from 'wouter'
import { FeatureTogglerV2, useFeatureFlag } from '~/shared/services/feature-flags'
import { ThemeToggler } from '~/shared/services/theme'
import { LoginDialogTrigger } from '~/widgets/LoginDialog'

export const BaseLayoutProvider = reatomComponent(({ children }: { children: React.ReactNode }) => {
  const darkThemeIsEnabled = useFeatureFlag('darkTheme')
  const navbarV2IsEnabled = useFeatureFlag('navbarV2')

  return (
    <BaseLayout headerSlot={(
      <header className="flex items-center justify-between">
        {navbarV2IsEnabled && (
          <nav className="flex items-center gap-4">
            <div className="text-sm text-gray-500">V2</div>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
          </nav>
        )}
        {!navbarV2IsEnabled && (
          <nav className="flex items-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
          </nav>
        )}
        <div className="flex items-center gap-4">
          {darkThemeIsEnabled && <ThemeToggler />}
          <FeatureTogglerV2 />
          <LoginDialogTrigger />
        </div>
      </header>
    )}
    >
      {children}
    </BaseLayout>
  )
})
