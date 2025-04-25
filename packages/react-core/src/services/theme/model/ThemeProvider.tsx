import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { useEffect } from 'react'
import { theme } from './store'
import { useFeatureFlag } from '../../feature-flags'

export const ThemeProvider = reatomComponent(({ children }: { children: React.ReactNode }) => {
  const darkThemeIsEnabled = useFeatureFlag('darkTheme')

  // Turn off dark theme if feature flag is disabled
  useEffect(wrap(() => {
    if (!darkThemeIsEnabled && theme() === 'dark') {
      theme.toggle()
    }
  }), [darkThemeIsEnabled])

  useEffect(wrap(() => {
    document.documentElement.setAttribute('data-theme', theme())
  }), [theme()])

  return children
})
