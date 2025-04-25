import { Link } from 'wouter'

type Props = {
  children: React.ReactNode
  headerRightSlot?: React.ReactNode
}

export function Layout({ children, headerRightSlot }: Props) {
  return (
    <div data-fsd="shared/Layout" className="flex flex-col gap-4 p-4 m-1 h-full">
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        {headerRightSlot}
      </header>
      <div className="flex flex-row gap-4 flex-grow">
        {children}
      </div>
      <footer className="text-center pt-10">
        footer
      </footer>
    </div>
  )
}
