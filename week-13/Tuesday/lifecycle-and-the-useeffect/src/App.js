import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Time from './components/time';
import Fetcher from './components/Fetcher';


function App() {

  

  
  return (
    <div className="App">
      <p>Hello World</p>
      {/* <Time /> */}
      <Fetcher />
    </div>
  );
}

export default App;
