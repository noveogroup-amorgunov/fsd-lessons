import type { ComponentType } from 'react'
import type { RouteComponentProps, RouteProps } from 'wouter'
import { Route as RouteWouter, Switch } from 'wouter'
import { HomePage } from '~/pages/home'
import { LoginPage } from '~/pages/login'
import { ProfilePage } from '~/pages/profile'
import { EmptyLayout } from '~/shared/ui/EmptyLayout'
import { BaseLayoutProvider as BaseLayout } from '../layout/BaseLayoutProvider'

type Props = {
  layout: ComponentType<{ children: React.ReactNode }>
  component: React.ComponentType<RouteComponentProps<any>>
} & RouteProps

function Route({ layout, component, ...props }: Props) {
  const Page = component
  const Layout = layout

  return (
    <RouteWouter {...props}>
      {params => (
        <Layout>
          <Page params={params} />
        </Layout>
      )}
    </RouteWouter>
  )
}

const routes = [
  { path: '/', component: HomePage, layout: BaseLayout },
  { path: '/profile', component: ProfilePage, layout: BaseLayout },
  { path: '/login', component: LoginPage, layout: EmptyLayout },
]

export function RouterProvider() {
  return (
    <Switch>
      {routes.map(({ path, component, layout }) => (
        <Route key={path} path={path} component={component} layout={layout} />
      ))}
    </Switch>
  )
}
