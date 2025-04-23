import { withChangeHook, withInit } from '@reatom/core'
import type { GenericExt } from '@reatom/core'

export function withLocalStorage(key?: string): GenericExt {
  return target =>
    target.extend(
      withInit((state) => {
        const snapshot = localStorage.getItem(key ?? target.name)

        if (!snapshot) {
          localStorage.setItem(key ?? target.name, JSON.stringify(state))
        }

        return snapshot ? JSON.parse(snapshot) : state
      }),
      withChangeHook((state) => {
        localStorage.setItem(key ?? target.name, JSON.stringify(state))
      }),
    )
}
