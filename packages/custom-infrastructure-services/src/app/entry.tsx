import { DebugModeProvider } from '@monorepo/react-core/services/debug-mode'
import '@monorepo/react-core/lib/reatom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DialogManagerProvider } from '~/shared/services/dialog-manager'
import { ThemeProvider } from '~/shared/services/theme'
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
