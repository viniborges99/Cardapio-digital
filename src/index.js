import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home';
import GlobalStyle from './styles/global'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle/>
  </React.StrictMode>
);


