import type { ComponentType } from 'react'

export type DialogManagerItem = {
  open: boolean
  Component: ComponentType<any & { close: () => void }>
  props: any
}
