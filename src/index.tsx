import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the 'react-dom/client' import
import Router from './Router';
import './styles/index.css';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
