import { Layout } from '~/shared/ui/Layout'
import { UserBar } from '~/widgets/UserBar'

export function AppLayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <Layout headerRightSlot={<UserBar />}>
      {children}
    </Layout>
  )
}
