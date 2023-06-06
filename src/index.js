import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { DataProvider } from './context/DataContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Layout />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
