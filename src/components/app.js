import React, { useState } from 'react';
import './app.css';
import Header from './Header';
import Body from './Body';
import Toaster from './Toaster';
import Bar from './Bar';
import AlertContext from '../context/AlertContext';

function App() {
  const alertHook = useState(undefined);
  return (
    <AlertContext.Provider value = {alertHook}>
      <div className="app">
        <Bar />
        <header className="header">
          <Header />
        </header>
        <main>
          <Body />
        </main>
        <Toaster />
      </div>
    </AlertContext.Provider>
  );
}

export default App;
