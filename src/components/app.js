import React from 'react'
import './app.css';
import Header from './Header';
import Body from './Body';
import Toaster from './Toaster';

function app() {
  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <main>
        <Body />
        <Toaster />
      </main>
    </div>
  );
}

export default app;
