import Track from './components/Track'
import { defaultApi } from './fetch'
import { useState } from 'react'
import { useQuery } from 'react-query'

const App = (): JSX.Element => {
  const { data, isLoading } = useQuery('params', async () => {
    return await defaultApi.paramsJsonGet()
  })

  const [playing, setPlaying] = useState(false)

  if (isLoading || data?.master == undefined) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Track title={data.master.track.title} artist={data.master.track.artist} />
      <button onClick={() => setPlaying(!playing)}>Play: {playing.toString()}</button>
    </>
  )
}

export default App
