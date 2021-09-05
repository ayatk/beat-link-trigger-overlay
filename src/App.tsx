import { useQuery } from 'react-query'

const getParams = async (): Promise<string> => {
  const data = await fetch('/params.json')
  return data.text()
}

const App = (): JSX.Element => {
  const { data } = useQuery('params', getParams)
  return (
    <div>
      <div>{data}</div>
    </div>
  )
}

export default App
