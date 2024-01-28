import logo from './logo.svg';
import './App.css';
import SpotCheck1 from './components/spotCheck1'
import Hot from './components/Hot'
import Cold from './components/Cold'
import Landing from './components/Landing'
import Home from './components/Home'
import React, { useState } from 'react';
import Hudini from './components/Hudini';

function App() {

  

  const [Data, setData] = useState(  {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })

  const changePage = () => {
    let test = Data.currentPage
    test = test === "Landing" ?  'Home'  :  'Landing'
    const newData = {...Data,currentPage: test}
    setData(newData)
    

  }

  const activateDiscount = () => {
    let test = Data.shouldDiscount
    test = test === false ?  true  :  false
    const newData = {...Data,shouldDiscount: test}
    setData(newData)
  }

  
  
  return (
    <div className="App">
      
      <Hudini />
      <button onClick={changePage}>change Page!</button>
      <button onClick={activateDiscount}>activateDiscount!</button>
      {
        Data.currentPage === "Landing" ? 
          <Landing userName={Data.user} storeData={Data.store} /> 
          : <Home props={Data}/>
      }
      
      
    </div>
  );
}

export default App;
