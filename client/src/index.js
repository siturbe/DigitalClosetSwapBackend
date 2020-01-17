import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from './contexts/auth0-context';


ReactDOM.render(
    <Auth0Provider
    audience={'https://enigmatic-chamber-52603.herokuapp.com'}
    >
        <App />
    </Auth0Provider>, 
    document.getElementById('root')
);



