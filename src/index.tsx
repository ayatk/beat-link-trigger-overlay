import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
const client = new QueryClient()

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <div id='hoge'>hoge</div>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('app')
)
