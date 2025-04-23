import type { RouteComponentProps, RouteProps } from 'wouter'
import { Route, Switch } from 'wouter'
import { HomePage } from '~/pages/home'
import { LoginPage } from '~/pages/login'
import { ProfilePage } from '~/pages/profile'
import { AppLayoutProvider } from '../layout/AppLayoutProvider.tsx'
import { EmptyLayout } from '../layout/EmptyLayout.tsx'

type Props = {
  layout?: typeof AppLayoutProvider
  component: React.ComponentType<RouteComponentProps<any>>
} & RouteProps

function RouteWithLayout({ layout = AppLayoutProvider, component, ...props }: Props) {
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

export function RouterProvider() {
  return (
    <Switch>
      <RouteWithLayout path="/" component={HomePage} />
      <RouteWithLayout path="/profile" component={ProfilePage} />

      <RouteWithLayout path="/login" component={LoginPage} layout={EmptyLayout} />
    </Switch>
  )
}
