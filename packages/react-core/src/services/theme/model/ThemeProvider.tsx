import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { useEffect } from 'react'
import { theme } from './store'

export const ThemeProvider = reatomComponent(({ children }: { children: React.ReactNode }) => {
  useEffect(wrap(() => {
    document.documentElement.setAttribute('data-theme', theme())
  }), [theme()])

  return children
})
