import React from 'react';
import './App.scss';
import ApiProvider from './Context/Api';
import Routes from './Routes';

function App() {
  return (
    <>
      <ApiProvider>
        <Routes />
      </ApiProvider>
    </>
  )
}

export default App;
