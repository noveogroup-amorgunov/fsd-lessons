import { computed } from '@reatom/core'
import { baseApiAccessToken } from '~/shared/api'

export const isAuthorized = computed(() => Boolean(baseApiAccessToken()))
