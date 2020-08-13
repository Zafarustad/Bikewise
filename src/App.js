import React from 'react';
import './App.css';
import { GlobalProvider } from './Context/GlobalState';
import Home from './Components/Home';

function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
