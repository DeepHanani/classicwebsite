import React from 'react'
import './HomeServices.css'
// import imagesss from '../Images/slider-img.png'
import Image from '../Images/professional-img.png.png'

export default function HomeServices(){
  return (
    <div className='protectcONTAINER' id='Services'>
    <div className='homeServicesContainer'>
    <div className='homeImageDive'>
    <img src={Image} alt="website template image"></img>
    </div>
    <div className="homeContainttext">
    <h1>WE PROVIDE PROFESSIONAL
    HOME SERVICES.</h1>
    <p>randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly</p>

    <div className='homeReadmore'>
    <button>READ MORE</button>
    </div>
    </div>
      
    </div>
    </div>
  )
}
