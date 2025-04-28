import { reatomComponent } from '@reatom/react'
import { useEffect } from 'react'
import { theme } from './store'

export const ThemeProvider = reatomComponent(({ children }: { children: React.ReactNode }) => {
  const currentTheme = theme()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  return children
}, 'ThemeProvider')
