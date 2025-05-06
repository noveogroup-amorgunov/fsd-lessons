import { DebugModeProvider } from '@monorepo/react-core/services/debug-mode'
import '@monorepo/react-core/lib/reatom'
import { clearStack, context } from '@reatom/core'
import { reatomContext } from '@reatom/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DialogManagerProvider } from '~/shared/services/dialog-manager'
import { ThemeProvider } from '~/shared/services/theme'
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
      <DialogManagerProvider />
    </StrictMode>
  </reatomContext.Provider>,
)
