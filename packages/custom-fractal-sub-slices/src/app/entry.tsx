import '@monorepo/react-core/lib/reatom'
import { DebugModeProvider } from '@monorepo/react-core/services/debug-mode'
import { DialogManagerProvider } from '@monorepo/react-core/services/dialog-manager'
import { ThemeProvider } from '@monorepo/react-core/services/theme'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from './providers/router/RouterProvider.tsx'

import '@monorepo/react-core/base.css'
import './entry.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DebugModeProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </DebugModeProvider>
    <DialogManagerProvider />
  </StrictMode>,
)
