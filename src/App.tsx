import { defaultApi } from './fetch'
import { useQuery } from 'react-query'

const App = (): JSX.Element => {
  const { data } = useQuery('params', async () => {
    const data = await defaultApi.paramsJsonGet()
    return data
  })
  return (
    <div>
      <div>{JSON.stringify(data?.players)}</div>
    </div>
  )
}

export default App
