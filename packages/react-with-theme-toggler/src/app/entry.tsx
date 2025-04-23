import { clearStack, context } from '@reatom/core'
import { reatomContext } from '@reatom/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@monorepo/react-core/lib/reatom'
import { ThemeProvider } from '~/entities/theme'
import { RouterProvider } from './providers/router/RouterProvider.tsx'

import '@monorepo/react-core/base.css'
import './entry.css'

clearStack()

createRoot(document.getElementById('root')!).render(
  <reatomContext.Provider value={context.start()}>
    <StrictMode>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </StrictMode>
  </reatomContext.Provider>,
)
