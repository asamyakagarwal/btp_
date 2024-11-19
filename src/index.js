import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="dev-n23vskot1sl5z1e2.us.auth0.com"
        clientId="8Jzyh7ccBj1F6wEvJ8TZdGtmu66LeiVO"
        authorizationParams={{
            redirect_uri: window.location.origin + '/home'
        }}
    >
        
        <App />
    </Auth0Provider>
);

