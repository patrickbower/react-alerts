import React, { useState } from 'react';
import './app.css';
import Header from './Header';
import Body from './Body';
import Toaster from './Toaster';
import AlertContext from '../context/AlertContext';

function App() {
  const alertHook = useState('toaster');
  return (
    <AlertContext.Provider value = {alertHook}>
      <div className="app">
        <header className="header">
          <Header />
        </header>
        <main>
          <Body />
          <Toaster />
        </main>
      </div>
    </AlertContext.Provider>
  );
}

export default App;
