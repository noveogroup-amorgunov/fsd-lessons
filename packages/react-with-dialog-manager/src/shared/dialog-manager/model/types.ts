import type { ComponentType } from 'react'

export type DialogManagerItem<T = any> = {
  Component: ComponentType<T>
  props: T
}
