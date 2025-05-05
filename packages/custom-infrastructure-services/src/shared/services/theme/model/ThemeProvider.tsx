import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { useEffect } from 'react'
import { useFeatureFlag } from '~/shared/services/feature-flags'
import { theme } from './store'

export const ThemeProvider = reatomComponent(({ children }: { children: React.ReactNode }) => {
  const currentTheme = theme()
  const darkThemeIsEnabled = useFeatureFlag('darkTheme')

  // Turn off dark theme if feature flag is disabled
  useEffect(wrap(() => {
    if (!darkThemeIsEnabled && currentTheme === 'dark') {
      theme('light')
    }
  }), [darkThemeIsEnabled])

  useEffect(wrap(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }), [currentTheme])

  return children
}, 'ThemeProvider')
