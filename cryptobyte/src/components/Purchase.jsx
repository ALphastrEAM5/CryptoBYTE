import React from 'react'
import cross from "../assets/cross.png"
import two from "../assets/2.jpg"
import Identicon from 'react-identicons'

const Purchase = () => {
  return (
    <div className='p-con'>
        <div className="p-head">
            <span className="p-buy-nft"><h2>Buy NFT</h2></span>
            <span className="p cross"><img src={cross} width="60" alt="" /></span>
            
        </div>
        <div className="p-img"><img src={two} alt="" /></div>
        <div className="p-desc">
            <h2>Title</h2><br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium deleniti, mollitia deserunt repellendus consectetur qui necessitatibus rerum, itaque amet consequuntur sunt quis magnam sit aut aspernatur aliquid placeat officiis dolorum?</p>
        </div>
        <div className="p-own">
            <span className="p-id" style={{marginTop:'30px'}}>

            <div className= "inline-identicon">
          <span className="wn-2 circle">
        <Identicon className="i-con" string={'0x51B...C1E9'} size={50} />
        </span>
        <span className="wn-2 avatar-text">
        <p style={{marginTop:'10px', marginLeft:'18px', color:'white'}}><b>0x51B...C1E9</b></p>
      <small style= {{color:'brown', marginLeft: '-100px', marginTop: '40px'}}><b>@you</b></small>
        </span>
      </div>

            </span>
            <span className="p-eth">
                <p>Current Price</p>
                <h2>0.34 ETH</h2>
            </span>
        </div>
        <div className="p-foot">
            <span className="p-purch">
                <button className="purchase">Purchase</button>
            </span>
            <span className="p-chg">
                <button className="chgPrice">Change Price</button>
            </span>
        </div>

        
      
    </div>
  )
}

export default Purchase
