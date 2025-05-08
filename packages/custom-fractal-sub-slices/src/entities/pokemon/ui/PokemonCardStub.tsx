type Props = {
  isLoading?: boolean
}

export function PokemonCardStub(props: Props) {
  return (
    <div className={`flex flex-col gap-4 ${props.isLoading ? 'animate-pulse' : ''}`}>
      <div className="bg-gray-200 dark:bg-gray-800" style={{ width: '200px', height: '32px' }} />
      <div className="bg-gray-200 dark:bg-gray-800" style={{ width: '280px', height: '280px' }} />
      <div className="bg-gray-200 dark:bg-gray-800" style={{ width: '50px', height: '24px' }} />
    </div>
  )
}
