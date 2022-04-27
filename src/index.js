import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <Auth0Provider
        domain="dev-wnfxbjcp.us.auth0.com"
        clientId="WDJj2xecZg2ep0r5vbkEIVJogMEGag6L"
        redirectUri="http://localhost:3000/trackers"
    >
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
