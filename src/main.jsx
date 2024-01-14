import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-1s02x2zytb2a1n6j.us.auth0.com"
      clientId="l29DolcrPFO9KaYfRpSsxHTYCoKX7Ahb"
      useRefreshTokens={true}
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
    
        <App />
      </BrowserRouter>
    </Auth0Provider>,
  </React.StrictMode>,
)
