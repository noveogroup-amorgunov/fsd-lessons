import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import { isAuthorized } from '~/entities/session'
import { user, userResource } from '~/entities/user'

export const ProfilePage = reatomComponent(() => {
  const [_, navigate] = useLocation()
  const currentUser = user()

  // FIXME: Move to router data loader
  const userIsReady = userResource.ready()

  useEffect(wrap(() => {
    if (!isAuthorized()) {
      navigate('/')
    }
  }), [isAuthorized(), navigate])

  if (!userIsReady) {
    return <div>Loading...</div>
  }

  if (!currentUser) {
    return null
  }

  return (
    <main data-fsd="page/profile" className="flex-grow dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold">Profile page</h1>
      <div className="flex flex-col gap-4 mt-10">
        <p>
          Your name is
          {' '}
          <strong>{currentUser.name}</strong>
        </p>
        <p>
          Your email is
          {' '}
          <strong>{currentUser.email}</strong>
        </p>
      </div>
    </main>
  )
})
