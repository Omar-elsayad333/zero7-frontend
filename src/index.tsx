import App from './App';
import 'styles/global.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from 'contexts/userContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <UserProvider>
            <App />
        </UserProvider>
    </React.StrictMode>
)