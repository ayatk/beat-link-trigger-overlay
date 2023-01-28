import { Global, css } from '@emotion/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500&display=swap');

  html {
    font-family: 'Noto Sans JP', sans-serif;
  }
`

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Global styles={GlobalStyle} />
      <App />
    </QueryClientProvider>
  </StrictMode>
)
