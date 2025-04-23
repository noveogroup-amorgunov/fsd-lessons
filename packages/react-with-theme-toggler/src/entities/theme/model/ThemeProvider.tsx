import { useEffect } from 'react'
import { theme } from './store'
import { reatomComponent } from '@reatom/react'
import { wrap } from '@reatom/core'

export const ThemeProvider = reatomComponent(function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(wrap(() => {
    document.documentElement.setAttribute('data-theme', theme())
  }), [theme()])

  return children
})
