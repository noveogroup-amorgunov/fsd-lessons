import { computed } from '@reatom/core'
import { baseApiAccessToken } from '~/shared/api/base'

export const isAuthorized = computed(() => Boolean(baseApiAccessToken()))
