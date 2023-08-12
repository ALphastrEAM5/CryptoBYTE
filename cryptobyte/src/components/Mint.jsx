import React, { useState } from 'react';
import cross from "../assets/cross.png"


const Mint = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [isFormVisible, setIsFormVisible] = useState(true);


  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setSelectedImage(imageUrl);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };


  return (
    <div className='MintForm' >
      
      
      <form className="line2" style={{ display: isFormVisible ? 'flex' : 'none' }}>


      <span className="block-title">Add NFT</span>


<span className="cross" style={{
  marginLeft: '430px', marginTop: '-65px', cursor:'pointer'}} onClick={toggleFormVisibility}>
  <img src={cross} width={50} alt="" />
  </span>      

 


<div className="set-img">
{selectedImage && <img src={selectedImage} style={{ height: '200px', width: '200px', marginTop: '25px', zIndex: '1000'}} alt="Selected" />}
</div>

      <label></label>
        <div className="form-input">
          <input className="prof-pic" type="file" accept="image/png, image/gif, image/jpeg, image/jpd, image/webp" multiple={true} autoComplete="off" required onChange={handleImageChange}/>
        </div>
        
        <label htmlFor="phone-number"></label>
        <div className="form-input">
          <input type="text" id="phone-number" name="phone-number" placeholder="Title" required />
        </div>

        <label htmlFor="email"></label>
        <div className="form-input">
          <input type="text" id="email" name="email" placeholder='Price (ETH)' required />
        </div>
        <br />

        

        <label htmlFor="inquiry"></label>
        <div className="form-input">
          <input type="text" id="inquiry" name="inquiry" placeholder="Description" required />
        </div>
        <br /><br />

        <input className="contact-btn submit" type="submit" value="Submit" />
      </form>
      
    </div>
  );
};

export default Mint;
