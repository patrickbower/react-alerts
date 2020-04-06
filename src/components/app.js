import React from 'react'
import './app.css';
import Header from './Header';
import Body from './Body';
import Toaster from './Toaster';
import AlertContext from '../context/AlertContext';

// const alert = "alertzzzz";

function app() {
  return (
    <AlertContext.Provider value={alert}>
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

export default app;
