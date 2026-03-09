import { action, atom, withAsyncData } from '@reatom/core'
import { baseApi, baseApiAccessToken } from '~/shared/api/base'

export const email = atom<Email>('', 'email')

export const password = atom<string>('', 'password')

export const submitForm = action(async () => {
  // FIXME: Add base validation
  // if (!isFormValid()) return

  const formData = {
    email: email(),
    password: password(),
  }

  const response = await baseApi.login(formData)

  baseApiAccessToken.set(response.accessToken)

  // Reset form after submission
  email.set('')
  password.set('')
}, 'submitForm').extend(withAsyncData())
