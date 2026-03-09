import type { ComponentType } from 'react'
import { Route } from 'wouter'
import type { RouteComponentProps, RouteProps } from 'wouter'

type Props = {
  layout: ComponentType<{ children: React.ReactNode }>
  component: React.ComponentType<RouteComponentProps<any>>
} & RouteProps

export function RouteWithLayout({ layout, component, ...props }: Props) {
  const Page = component
  const Layout = layout

  return (
    <Route {...props}>
      {params => (
        <Layout>
          <Page params={params} />
        </Layout>
      )}
    </Route>
  )
}
