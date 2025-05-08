declare const _brand: unique symbol

declare global {
  export type Brand<K, T> = K & { [_brand]: T }

  export type Url = string

  export type Email = string

  export type Id = number
}

export {}
