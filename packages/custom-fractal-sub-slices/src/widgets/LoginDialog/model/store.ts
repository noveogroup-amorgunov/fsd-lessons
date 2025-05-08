import { action, atom, parseAtoms, withAsyncData, wrap } from '@reatom/core'
import { baseApi, baseApiAccessToken } from '~/shared/api'

export const email = atom<Email>('', 'email')

export const password = atom<string>('', 'password')

export const submitForm = action(async () => {
  // FIXME: Add base validation
  // if (!isFormValid()) return

  const formData = parseAtoms({
    email,
    password,
  })

  const response = await wrap(baseApi.login(formData))

  baseApiAccessToken(response.accessToken)

  // Reset form after submission
  email('')
  password('')
}, 'submitForm').extend(withAsyncData())
