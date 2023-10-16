import React, { useEffect, useState } from 'react'
import './Registration.css'
import { useNavigate } from 'react-router-dom'
import Animation from '../../Animation'
import ForgetPassword from '../../Forget/ForgetPassword'


export default function Registration(){

    const[input,setInput] =  useState({
        firstname:"",
        email:"",
        password:""
    });

    const[firstError,setFirsterror] = useState("");
    const[emailError,setemailerror] = useState("");
    const[passwordError,setpassworderror] = useState("");

    const navigate = useNavigate();

    const handalchange = (e)=>{
       setInput({...input ,[e.target.name]:e.target.value});

       if(input.firstname.length >10  ){
        setFirsterror("user name must be 10 character");
    }

//      if(input.email.includes("@gmail.com")){
//       setemailerror("email is not valid");
//   }

 if(input.password.length >8 ){

  setpassworderror("password must be 8 character");

}
    }

    console.log(input);

    const handalSubmit = ()=>{

      localStorage.setItem("user-info",JSON.stringify(input));
        if(input.firstname ==input.firstname && input.email ==input.email && input.password ==input.password && input.firstname !="" && input.email != "" && input.password !=""){
           navigate('/login') 
           localStorage.setItem("user-info" ,JSON.stringify(input));
        }else{
          alert("user invalid")
        }if(input.email == ""){
          setemailerror("email is required");
      }if(input.firstname == ""){
       setFirsterror("firstname is required");
   }if(input.password == ""){
    setpassworderror("password is required");
}


    }
  return (

<>
    <div className='mainContainer'>
    <Animation/>

    <div className="childContainer">

    <div className='inputContainer'>

   <h1>Sign up</h1>

    <input type="text" name='firstname' placeholder='firstname' onChange={handalchange}/>
    <p className='error'>{firstError}</p><br></br>
    <input type="email" name='email' placeholder='email' onChange={handalchange}/>
    <p className='error'>{emailError}</p><br></br>
    <input type="password"  name='password' placeholder='password'  onChange={handalchange}/>
    <p className='error'>{passwordError}</p><br></br>
    <button onClick={handalSubmit}>Submit</button><br />
    <p className='forget' onClick={()=>{
      navigate("/login")
      
    }}>Already have an account ? sign in</p>
     </div>

  

    </div>
  </div>
  </>
  )
}
