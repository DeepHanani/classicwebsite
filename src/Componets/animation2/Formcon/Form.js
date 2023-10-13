import React from 'react'
import './Formcon.css'

export default function Form() {
  return (
    <>
    <h1 className='contacttag'>CONTACT US</h1>
    <div className='formcontainerDiv'>
    
    <div className='inputFieldContainer'>
      <div className='inputs'>
      <input type="text"  placeholder='Name'/><br />
      <input type="number"  placeholder='phone number'/><br />
      <input type="email"  placeholder='email'/><br />
      <textarea id="w3review" name="w3review" rows="10" cols="87" placeholder='Message'></textarea><br />
      
 
      </div><br /><br />
      <div className='sendBtn'>
      <button>SEND</button>
      </div>
     
    </div>


    <div className='googlemap'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14682.699546772004!2d72.5139285!3d23.0723779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d77da3df26b%3A0xba6acb6b637cd1cb!2sDvij%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1697102481012!5m2!1sen!2sin" width="600" height="450" style={{border:"0", allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}} ></iframe>
    </div>
      
    </div>
    </>
  )
}
