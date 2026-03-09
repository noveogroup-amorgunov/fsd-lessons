import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { reatomComponent } from '@reatom/react'
import { useCallback } from 'react'
import { theme } from '../model/store'

export const ThemeToggler = reatomComponent(() => {
  const currentTheme = theme()
  const Icon = currentTheme === 'light' ? SunIcon : MoonIcon

  const changeTheme = useCallback(() => {
    theme.set(currentTheme === 'light' ? 'dark' : 'light')
  }, [currentTheme])

  return (
    <div data-fsd="entity/theme-toggler" className="inline-flex">
      <button type="button" onClick={changeTheme}>
        <Icon width={24} height={24} />
      </button>
    </div>
  )
}, 'ThemeToggler')
