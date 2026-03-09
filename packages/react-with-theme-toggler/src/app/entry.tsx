import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@monorepo/react-core/lib/reatom'
import { RouterProvider } from './providers/router/RouterProvider.tsx'

import '@monorepo/react-core/base.css'
import './entry.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>,
)
