import App from './App'
import { GlobalStyle } from './GlobalStyle'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('app')
)
