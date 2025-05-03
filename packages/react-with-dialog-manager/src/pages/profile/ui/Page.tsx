import { reatomComponent } from '@reatom/react'

export const ProfilePage = reatomComponent(() => {
  return (
    <main data-fsd="page/profile" className="flex-grow dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold">Profile page</h1>
      <p>Any content</p>
    </main>
  )
})
