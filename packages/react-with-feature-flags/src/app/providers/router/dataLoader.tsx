import { reatomComponent } from '@reatom/react'
import { featureFlagsResource } from '~/entities/feature-flags'

type Props = {
  children: React.ReactNode
}

export const DataLoaderProvider = reatomComponent(({ children }: Props) => {
  const appIsReady = featureFlagsResource.ready()

  if (!appIsReady) {
    return <div>Loading...</div>
  }

  return children
}, 'DataLoaderProvider')
