import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from './providers/router/RouterProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>,
)
