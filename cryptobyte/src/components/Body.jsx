import React, { useState } from 'react'
import Mint from './Mint'; // Import Mint component
import one from "../assets/1.jpg"
import Identicon from 'react-identicons'


const Body = ({ defaultAccount }) => {
  

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="bd-gig">
      
        <span className="left-center gig-title text-white pd-5-left" >
            <h1>Buy and Sell <br />Digital Arts, <br />
            <span className="nft">NFTs</span> Collections
            </h1>
        
        <p>Mint and collect the hottest NFTs around.</p>
      
        <button className="create-token" onClick={() => toggleFormVisibility(false)}>
        Create NFT
      </button>

      {isFormVisible && <Mint />}

      <div className="standards num-3">
        <span className="users">
            <h2>123k</h2>Users
        </span>
        <span className="artWorks">
        <h2>152k</h2>Artworks
        </span>
        <span className="artists">
        <h2>200k</h2>Artists
        </span>
      </div>
      </span>      

      <span className="right-center">
        <div className="img-one">
        <img src={one} width="720" height="420" alt="" />
        
        <div className= "inline-identicon">
          <span className="wn-2 circle">
        <Identicon className="i-con" string={defaultAccount} size={50} />
        </span>
        <span className="wn-2 avatar-text">
        <p className="id">{defaultAccount.substring(0,5)}...{defaultAccount.substring(defaultAccount.length - 4)}</p>
      <small className='id' style= {{color:'brown', marginLeft: '-100px', marginTop: '-20px'}}>@you</small>
        </span>
      </div>
      </div>

      </span>
      
      
    </div>
  )
}

export default Body
