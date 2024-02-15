import React from 'react'
import imagesrc from '../../logo.webp'

function Navbar(){
   return (
    <>
       <div className='flex justify-between h-20 py-1.5 bg-emerald-500 px-1'>
          <img src={imagesrc} alt="LOGO" />
          <ul className='flex text-white space-x-9 py-3 px-3'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
       </div>
    </>
   )
}

export default Navbar