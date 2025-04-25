export function EmptyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-fsd="shared/EmptyLayout" className="m-1 flex justify-center items-center min-h-[calc(100vh-1rem)]">
      {children}
    </div>
  )
}
