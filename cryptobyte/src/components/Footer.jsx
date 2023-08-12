import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='gradient-bg-footer p-4'>
      
      <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.25] justify-center items-center'>
            <img className='w-32' src={logo} height="150" width="210"  alt="" />
        </div>

        <div className="copyright">&copy; All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer
