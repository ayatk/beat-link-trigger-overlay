import Track from './components/Track'
import { defaultApi } from './fetch'
import { useQuery } from 'react-query'

const App = (): JSX.Element => {
  const { data, isLoading } = useQuery('params', async () => {
    return await defaultApi.paramsJsonGet()
  })

  if (isLoading || data?.master == undefined) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Track title={data.master.track.title} artist={data.master.track.artist} />
    </>
  )
}

export default App
