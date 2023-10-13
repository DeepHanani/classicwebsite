import React from 'react'
import inages from '../Images/s1.png.png'
import imagess from '../Images/s2.png.png'
import Image from '../Images/s3.png.png'
import './OurServices.css'

export default function OurServices() {
  return (
    <>
    <h1>OUR SERVICES</h1>
    <div className='webServicescon'>

    <div className='maintenance'>
    <div className='maintenanceImgdiv'>
    <img src={inages} alt="" />
    </div>

    <h1>Maintenance</h1>
    <p>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
    </div>


    <div className='maintenance'>
    <div className="maintenanceImgdiv">
    <img src={imagess} alt="" />
    </div>

    <h1>Electrical</h1>
    <p>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
    </div>

    <div className='maintenance'>

    <div className="maintenanceImgdiv">
    <img src={Image} alt="" />
    </div>
  
    <h1>Plumbing</h1>
    <p>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
    </div>
 
 
    </div>

    <div className='viewMoreBtn'>
    <button>VIEW MORE</button>
    </div>
    </>
  )
}
