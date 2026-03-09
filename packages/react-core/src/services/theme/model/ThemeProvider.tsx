import { reatomComponent } from '@reatom/react'
import { useEffect } from 'react'
import { useFeatureFlag } from '../../feature-flags'
import { theme } from './store'

export const ThemeProvider = reatomComponent(({ children }: { children: React.ReactNode }) => {
  const currentTheme = theme()
  const darkThemeIsEnabled = useFeatureFlag('darkTheme')

  // Turn off dark theme if feature flag is disabled
  useEffect(() => {
    if (!darkThemeIsEnabled && currentTheme === 'dark') {
      theme.set('light')
    }
  }, [darkThemeIsEnabled])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  return children
}, 'ThemeProvider')
