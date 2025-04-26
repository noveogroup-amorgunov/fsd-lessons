import { atom } from '@reatom/core'
import type { ComponentType } from 'react'
import type { DialogManagerItem } from './types'

export const dialogs = atom<DialogManagerItem[]>([], 'dialogs').actions(target => ({
  open: <T>(Component: ComponentType<T>, props: T) => target((state) => {
    return [...state, { Component, props, open: true }]
  }),
  close: (Component: ComponentType<any>) => target((state) => {
    return state.filter(dialog => dialog.Component !== Component)
  }),
}))
