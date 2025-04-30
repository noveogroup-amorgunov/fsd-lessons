import { useEffect } from 'react'
import { reatomComponent } from '@reatom/react'
import { useFeatureFlag } from '../feature-flags'

export const DebugModeProvider = reatomComponent(({ children }: { children: React.ReactNode }) => {
  const fsdDebugModeIsEnabled = useFeatureFlag('fsdDebugMode')

  useEffect(() => {
    if (fsdDebugModeIsEnabled) {
      document.body.classList.add('fsd-debug-mode')
    }
    else {
      document.body.classList.remove('fsd-debug-mode')
    }
  }, [fsdDebugModeIsEnabled])

  return children
}, 'DebugModeProvider')
