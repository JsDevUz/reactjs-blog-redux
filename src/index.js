import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { StoreProvider } from 'easy-peasy';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider store={store}>
        <Layout />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
