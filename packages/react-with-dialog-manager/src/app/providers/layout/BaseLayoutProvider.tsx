import { FeatureToggler, useFeatureFlag } from '@monorepo/react-core/services/feature-flags'
import { theme, ThemeToggler } from '@monorepo/react-core/services/theme'
import { BaseLayout } from '@monorepo/react-core/ui'
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { useEffect } from 'react'
import { Link } from 'wouter'

export const BaseLayoutProvider = reatomComponent(({ children }: { children: React.ReactNode }) => {
  const darkThemeIsEnabled = useFeatureFlag('darkTheme')
  const fsdDebugModeIsEnabled = useFeatureFlag('fsdDebugMode')

  // FIXME: move to separate component
  useEffect(() => {
    if (fsdDebugModeIsEnabled) {
      document.body.classList.add('fsd-debug-mode')
    }
    else {
      document.body.classList.remove('fsd-debug-mode')
    }
  }, [fsdDebugModeIsEnabled])

  // FIXME: move to ThemeProvider
  useEffect(wrap(() => {
    if (!darkThemeIsEnabled && theme() === 'dark') {
      theme.toggle()
    }
  }), [darkThemeIsEnabled])

  return (
    <BaseLayout headerSlot={(
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        <div className="flex items-center gap-4">
          {darkThemeIsEnabled && <ThemeToggler />}
          <FeatureToggler />
        </div>
      </header>
    )}
    >
      {children}
    </BaseLayout>
  )
})
