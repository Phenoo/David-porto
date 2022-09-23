import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './styles/index.scss'
import { MyContextState } from './contexts/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyContextState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyContextState>
);