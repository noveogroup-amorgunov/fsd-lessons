import { reatomComponent } from '@reatom/react'
import { SearchPokemonByIdPage } from '../@fractal-widgets/SearchPokemonById'
import { StrongestPokemonsSlider } from '../@fractal-widgets/StrongestPokemons'

export const HomePage = reatomComponent(() => {
  return (
    <main data-fsd="page/home" className="flex-grow dark:bg-black dark:text-white p-6">
      <h1 className="text-3xl font-bold">Home page</h1>
      <SearchPokemonByIdPage />
      <StrongestPokemonsSlider />
    </main>
  )
})
