import { action } from '@reatom/core'
import { baseApiAccessToken } from '~/shared/api'

export const logout = action(() => {
  baseApiAccessToken('')
}, 'logout')
