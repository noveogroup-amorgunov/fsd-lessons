import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { theme } from '../model/store'

export const ThemeToggler = reatomComponent(() => {
  const Icon = theme() === 'light' ? SunIcon : MoonIcon

  return (
    <div>
      <button className="cursor-pointer" onClick={wrap(theme.toggle)}>
        <Icon width={24} height={24} />
      </button>
    </div>
  )
})
