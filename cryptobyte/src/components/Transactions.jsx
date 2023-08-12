import React from 'react'
import tr_logo from "../assets/tr-logo.png"
import redirect from "../assets/redirect.jpg"

const Transactions = () => {
  return (
    <div className="transactions"><b style={{marginLeft:'90px', color:'white',
    marginLeft:'90px', fontSize:'60px', fontFamily:'Georgia'}}>Latest Transactions</b>

    <div className="trans-con">
      <div className="row">
    <div className="item">
      <span className="tr-logo"><img src={tr_logo} width={50} height={50} alt="" /></span>
      <span className="tr-txt">

        <div className="tr-confirm" style={{marginLeft: '140px', opacity:'0.5'}}>#1 Fund Transferred <br />Received by<i style={{color:'rgb(235, 106, 128)'}}>0x51B...C1E9</i> <a href="#"><img src={redirect} height={20} width={20} alt="" /></a></div>

        <div className="tr-cur" style={{display:'flex',
        justifyContent:'center', marginLeft: '60px', opacity:'0.5'}}>0.32 ETH</div>
        
          
        
      </span>
      </div>
      <div className="item">
      <span className="tr-logo"><img src={tr_logo} width={50} height={50} alt="" /></span>
      <span className="tr-txt">

      <div className="tr-confirm" style={{marginLeft: '140px', opacity:'0.5'}}>#2 Fund Transferred <br />Received by <i style={{color:'rgb(235, 106, 128)'}}>0x51B...C1E9</i> <a href="#"><img src={redirect} height={20} width={20} alt="" /></a></div>
          
      <div className="tr-cur" style={{display:'flex',
        justifyContent:'center', marginLeft: '60px', opacity:'0.5'}}>0.32 ETH</div>
        
      </span>
      </div>
      <div className="item">
      <span className="tr-logo"><img src={tr_logo} width={50} height={50} alt="" /></span>
      <span className="tr-txt">

      <div className="tr-confirm" style={{marginLeft: '140px', opacity:'0.5'}}>#3 Fund Transferred <br />Received by <i style={{color:'rgb(235, 106, 128)'}}>0x51B...C1E9</i> <a href="#"><img src={redirect} height={20} width={20} alt="" /></a></div>
          
      <div className="tr-cur" style={{display:'flex',
        justifyContent:'center', marginLeft: '60px', opacity:'0.5'}}>0.32 ETH</div>

      </span>
      </div>
    
  </div>
    </div>

    <div className="load-more">Load More</div>

    </div>
  )
}

export default Transactions
