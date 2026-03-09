import { DebugModeProvider } from '@monorepo/react-core/services/debug-mode'
import '@monorepo/react-core/lib/reatom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DialogManagerProvider } from '~/shared/dialog-manager'
import { RouterProvider } from './providers/router/RouterProvider.tsx'

import '@monorepo/react-core/base.css'
import './entry.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DebugModeProvider>
      <RouterProvider />
    </DebugModeProvider>
    <DialogManagerProvider />
  </StrictMode>,
)
