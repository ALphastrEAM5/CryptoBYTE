import React, { useState } from 'react';
import Header from "./components/Header"
import Body from "./components/Body"
import DOT from "./components/DOT"
import Transactions from "./components/Transactions"
import Footer from "./components/Footer"
import Mint from "./components/Mint"
import Purchase from "./components/Purchase"


function App() {

  const [defaultAccount, setDefaultAccount] = useState('0x0000000000000000000000000000000000000000');
  
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
      <Header defaultAccount={defaultAccount} setDefaultAccount={setDefaultAccount} />
      <Body defaultAccount={defaultAccount} />
        
        </div> 
        <div className="radial-dark">
        <DOT />
        <Purchase />
        
        <Transactions />
        <Footer />
        
        </div>
    </div> 
  );
}

export default App;


