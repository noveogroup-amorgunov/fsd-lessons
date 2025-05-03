import { RouteWithLayout as Route } from '@monorepo/react-core/lib/wouter'
import { EmptyLayout } from '@monorepo/react-core/ui'
import { Switch } from 'wouter'
import { HomePage } from '~/pages/home'
import { LoginPage } from '~/pages/login'
import { ProfilePage } from '~/pages/profile'
import { BaseLayoutProvider as BaseLayout } from '../layout/BaseLayoutProvider.tsx'

const routes = [
  { path: '/', component: HomePage, layout: BaseLayout },
  { path: '/login', component: LoginPage, layout: EmptyLayout },
  { path: '/profile', component: ProfilePage, layout: BaseLayout },
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
