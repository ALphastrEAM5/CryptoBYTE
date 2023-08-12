import React from 'react';
import two from "../assets/2.jpg"
import three from "../assets/3.jpg"
import four from "../assets/4.jpg"
import five from "../assets/5.jpg"
import six from "../assets/6.jpg"
import seven from "../assets/7.jpg"
import eight from "../assets/8.jpg"

const DOT = () => {
  return (
    <div className="artworks" style={{color:'white', borderColor:'black'}}>
  <b style={{marginLeft:'90px', marginLeft:'90px', fontSize:'60px', fontFamily:'Georgia'}}>Artworks</b>


    <div className='hold-card card-slide'>


      <span className="card" style={{ width: '32rem' }}>
        <img src={two} className="card-img-top custom-img" alt="..." />
        <div className="card-body">
          <h2 className="card-title">NFT #1</h2>
          <p className="card-text">Introducing FLUF World Thingies: a collection  of AI-integrated spider artists, capable of producing original generative art as  NFTs. Each Thingie connects to Altered state's Machine's community-driven AI protocol that aims to drive continued evolution in the creative potential of intelligence digital avatars.</p>
          
          <div className="card-footer">
            <span className="eth-price">

              <h2>Current Price</h2>
              <h3>0.34 ETH</h3>
              
            </span>
            <span className="view-details">
            <button className="btn btn-primary">View Details</button>
            </span>
          </div>
          
        </div>
      </span>


      <span className="card" style={{ width: '32rem' }}>
        <img src={three} className="card-img-top custom-img" alt="..." />
        <div className="card-body">
        <h2 className="card-title">NFT #2</h2>
          <p className="card-text">Introducing FLUF World Thingies: a collection  of AI-integrated spider artists, capable of producing original generative art as  NFTs. Each Thingie connects to Altered state's Machine's community-driven AI protocol that aims to drive continued evolution in the creative potential of intelligence digital avatars.</p>
          <div className="card-footer">
            <span className="eth-price">

              <h2>Current Price</h2>
              <h3>0.34 ETH</h3>
              
            </span>
            <span className="view-details">
            <button className="btn btn-primary">View Details</button>
            </span>
          </div>
        </div>
      </span>



    </div>
    </div>
  );
};

export default DOT;
