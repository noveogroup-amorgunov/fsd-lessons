import { RouteWithLayout as Route } from '@monorepo/react-core/lib/wouter'
import { Switch } from 'wouter'
import { HomePage } from '~/pages/home'
import { ProfilePage } from '~/pages/profile'
import { BaseLayoutProvider as BaseLayout } from '../layout/BaseLayoutProvider.tsx'

const routes = [
  { path: '/', component: HomePage, layout: BaseLayout },
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
