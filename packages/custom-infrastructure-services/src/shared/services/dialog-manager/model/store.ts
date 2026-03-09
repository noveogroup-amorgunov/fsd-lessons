import { action, atom } from '@reatom/core'
import type { ComponentType } from 'react'
import type { DialogManagerItem } from './types'

export const dialogs = atom<DialogManagerItem[]>([], 'dialogs').extend(
  (target) => {
    return {
      close: action((Component: ComponentType<any>) => {
        target.set((state) =>
          state.filter((dialog) => dialog.Component !== Component),
        )
      }, `${target.name}.close`),
      open: action(<T>(Component: ComponentType<T>, props: T) => {
        target.set((state) => [...state, { Component, props }])
      }, `${target.name}.open`),
    }
  },
)
