import { atom, computed, withAsyncData } from '@reatom/core'
import { isAuthorized } from '~/entities/session'
import { baseApi } from '~/shared/api/base'
import { mapUser } from '../lib/mapUserDto'
import type { User, UserId } from '../model/types'

export const userId = atom<UserId | null>(null, 'userId')

export const user = atom<User | null>(null, 'user')

export const userResource = computed(async () => {
  // FIXME: Clear user on logout
  if (!isAuthorized()) {
    userId.set(null)
    user.set(null)

    return
  }

  const response = await baseApi.me()

  user.set(mapUser(response))
}, 'userResource').extend(withAsyncData({ initState: null }))
