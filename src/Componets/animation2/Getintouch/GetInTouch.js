import React from 'react'
import './GetInTouch.css'

export default function GetInTouch() {
  return (
    <div className='prostepsContainer' id='Contact'>
    <h1>GET IN TOUCH</h1>
    <div className='stepsContainer'>
    <div className='stepss'>
    <span className='circle'><i class="fa-solid fa-location-dot" style={{color: "#fafcff"}}></i></span>
    <span className='circle'><i class="fa-solid fa-phone" style={{color: "#fafcff"}}></i></span>
    <span className='circle'><i class="fa-solid fa-envelope" style={{color: "#fafcff"}}></i></span>
    <div className='progress'>
    <span className='indicator'></span>
    </div>
    </div>

    <div className='information'>
    <div>Lorem Ipsum is simply dummy text</div>
    <div>+02 1234567890</div>
    <div>mail@domain.com</div>
    </div>

    <h1 className='follow'>FOLLOW US</h1>

   <div className='socialContainer'>
    <div className='socialmedia'>
      <div className='facebook'><i class="fa-brands fa-facebook-f"></i></div>
      <div className='tweeter'><i class="fa-brands fa-twitter"></i></div>
      <div className='youtube'><i class="fa-brands fa-youtube"></i></div>
      <div className='instagram'><i class="fa-brands fa-instagram"></i></div>
    </div>
   </div>

 
      
    </div>
    <div className='line'></div>

    <p className='details'>© 2023 All Rights Reserved. By HTML Design</p>
    </div>
  )
}
