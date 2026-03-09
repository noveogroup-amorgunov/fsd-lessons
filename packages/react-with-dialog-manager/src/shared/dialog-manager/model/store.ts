import { action, atom } from '@reatom/core'
import type { ComponentType } from 'react'
import type { DialogManagerItem } from './types'

export const dialogs = atom<DialogManagerItem[]>([], 'dialogs')

export const openDialog = action(<T>(Component: ComponentType<T>, props: T) => {
  dialogs.set([...dialogs(), { Component, props }])
})

export const closeDialog = action((Component: ComponentType<any>) => {
  dialogs.set(dialogs().filter(dialog => dialog.Component !== Component))
})
