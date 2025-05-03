import { DebugModeProvider } from '@monorepo/react-core/services/debug-mode'
import { ThemeProvider } from '@monorepo/react-core/services/theme'
import '@monorepo/react-core/lib/reatom'
import { clearStack, context } from '@reatom/core'
import { reatomContext } from '@reatom/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from './providers/router/RouterProvider.tsx'

import '@monorepo/react-core/base.css'
import './entry.css'

clearStack()

createRoot(document.getElementById('root')!).render(
  <reatomContext.Provider value={context.start()}>
    <StrictMode>
      <DebugModeProvider>
        <ThemeProvider>
          <RouterProvider />
        </ThemeProvider>
      </DebugModeProvider>
    </StrictMode>
  </reatomContext.Provider>,
)
