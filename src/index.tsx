import { Global } from '@emotion/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import GlobalStyle from './GlobalStyle'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Global styles={GlobalStyle} />
      <App />
    </QueryClientProvider>
  </StrictMode>
)
