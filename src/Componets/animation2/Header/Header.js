import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'


export default function Header(){

  const naviget =useNavigate()

  const handallogOut = ()=>{
    localStorage.removeItem('user-info')

    naviget('/')

  }
  const handalsignup =()=>{
    naviget("/")
  }
  return (
    <div className='containerMain'>
    <div className='imgDiv'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzcAywYjhGCZ4yI1SnHrKFobzCRAjdNiUIVp3sdOKExVq27rQbAvOMerKazStRLdtT0o&usqp=CAU" alt="" />
    </div>
    <div>
    <p><i class="fa-solid fa-phone"  style={{color: "#fb8618",}}></i><span> Call : +01 123455678990</span> </p>
    </div>

    <div>
    <p><i class="fa-solid fa-envelope" style={{color: "#f99406"}}></i><span>  Email : mail@domain.com</span> </p>
    </div>
    
      <ul>
      <li>Home</li>
      <li><a href="#about">About</a></li>
      <li><a href="#Services">Services</a></li>
      <li><a href="#Contact">Contact</a></li>
      <li onClick={handalsignup} className='signup'>Signup</li>
      <li onClick={handallogOut} className='logout'>Logout</li>

      </ul>
    </div>
  )
}
