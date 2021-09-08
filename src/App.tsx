import Track from './components/Track'
import { defaultApi } from './fetch'
import { useState } from 'react'
import { useQuery } from 'react-query'

const App = (): JSX.Element => {
  const { data, isLoading } = useQuery('params', async () => {
    return await defaultApi.paramsJsonGet()
  })

  const [playing, setPlaying] = useState(false)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Track
        playing={playing}
        title={data.players['1']?.track.title}
        artist={data.players['1']?.track.artist}
        imageUrl={`/artwork/${data.players['1']?.number}`}
      />
      <button onClick={() => setPlaying(!playing)}>Play: {playing.toString()}</button>
    </>
  )
}

export default App
