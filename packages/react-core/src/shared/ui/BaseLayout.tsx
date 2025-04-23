type Props = {
  children: React.ReactNode
  headerSlot?: React.ReactNode
}

export function BaseLayout({ children, headerSlot }: Props) {
  return (
    <div data-fsd="shared/BaseLayout" className="flex flex-col gap-4 p-4 m-1 h-full dark:bg-black dark:text-white">
      {headerSlot}
      <div className="flex flex-row gap-4 flex-grow">
        {children}
      </div>
      <footer className="text-center pt-10">
        footer
      </footer>
    </div>
  )
}
