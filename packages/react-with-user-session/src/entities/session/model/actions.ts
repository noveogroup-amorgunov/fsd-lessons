import { action } from '@reatom/core'
import { baseApiAccessToken } from '~/shared/api/base'

export const logout = action(() => {
  baseApiAccessToken('')
}, 'logout')
