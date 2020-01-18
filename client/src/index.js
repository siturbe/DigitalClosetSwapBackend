import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from './contexts/auth0-context';


ReactDOM.render(
    <Auth0Provider
        domain={process.env.REACT_AUTH0_DOMAIN}
        client_id={process.env.REACT_AUTH0_CLIENT_ID}
        redirect_uri={window.location.origin}
        audience={'https://enigmatic-chamber-52603.herokuapp.com/'}
    
    >
        <App />
    </Auth0Provider>, 
    document.getElementById('root')
);



