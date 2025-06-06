import { ThemeToggler } from '~/entities/theme/ui/ThemeToggler'

export function HomePage() {
  return (
    <main data-fsd="page/home" className="flex-grow dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold">Home page</h1>
      <p>Any content</p>
      <ThemeToggler />
    </main>
  )
}
