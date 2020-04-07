import React, { useState } from 'react';
import './app.css';
import Header from './Header';
import Body from './Body';
import AlertContext from '../context/AlertContext';
import Toaster from './Toaster';
import Bar from './Bar';
import Push from './Push';

function App() {
  const alertHook = useState(undefined);
  return (
    <AlertContext.Provider value={alertHook}>
      <div className="app">
        <Bar />
        <Push />
        <header>
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
