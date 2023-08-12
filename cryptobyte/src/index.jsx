import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App'

ReactDOM.render(
  
  <BrowserRouter>
  <Auth0Provider
  domain="dev-ojaoccci8d3lurjm.us.auth0.com"
  clientId="k6kSZ0Eq0t36aoMCdM9kAYjLUS3uy65V"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
)