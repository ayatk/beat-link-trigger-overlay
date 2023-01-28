import { useQuery } from 'react-query'
import Track from './components/Track'
import { defaultApi } from './fetch'

const App = (): JSX.Element => {
  const { data, isLoading } = useQuery(
    'params',
    async () => {
      return await defaultApi.paramsJsonGet()
    },
    {
      refetchInterval: 2000,
    }
  )

  if (isLoading || data?.master == undefined) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Track
        title={data.master.track.title}
        artist={data.master.track.artist}
        imageUrl={`/artwork/${data.master.number}`}
      />
    </>
  )
}

export default App
