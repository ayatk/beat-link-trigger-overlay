import App from './App'
import { GlobalStyle } from './GlobalStyle'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </StrictMode>
)
