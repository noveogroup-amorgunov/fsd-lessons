import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { theme } from '../model/store'

export const ThemeToggler = reatomComponent(() => {
  const currentTheme = theme()
  const Icon = currentTheme === 'light' ? SunIcon : MoonIcon

  const changeTheme = wrap(() => {
    theme(currentTheme === 'light' ? 'dark' : 'light')
  })

  return (
    <div data-fsd="entity/theme-toggler" className="inline-flex">
      <button onClick={changeTheme}>
        <Icon width={24} height={24} />
      </button>
    </div>
  )
}, 'ThemeToggler')
