import React, { useState } from 'react'
import './ForgetPassword.css'
import Animation2 from '../animation2/Animation2'
import Animation from '../Animation'
import { useNavigate } from 'react-router-dom'

export default function ForgetPassword() {

  const[input, setInput] = useState({
    email:""
  })

  const naviget = useNavigate()
 let b =JSON.parse(localStorage.getItem('user-info'));
 console.log(b);

 const handalChange = (e)=>{
  setInput({...input,[e.target.name] : e.target.value})
 }

const handalsubmit = ()=>{

  if(input.email ==""){
    alert("email is required")
  }
  if(input.email === b.email){
   naviget("/homepage")
  }else{
    alert("email dose not match")
  }


}

 console.log(input)

 const handal = ()=>{
  naviget("/")
 }
  return (
    <>
   
    <div className='forgetDiv'>
   
    <div class="form-container">
      <div class="logo-container">
        Login
      </div>

      <form class="form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required="" onChange={handalChange}/>
        </div>

        <button class="form-submit-btn" type="submit" onClick={handalsubmit}>Login</button>
      </form>

      <p class="signup-link">
        Don't have an account?
        <a href="#" class="signup-link link" onClick={handal}> Sign up now</a>
      </p>
    </div>
    </div>
    </>
  )
}
