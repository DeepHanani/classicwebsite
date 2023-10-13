import React, { useState } from 'react'

export default function Counter(){

    const[count, setCount] = useState(0)

    const handalClick = ()=>{
        setCount(count+1);
    }

    const handalChange = ()=>{
        setCount(count-1);
    }


  return (
    <div>
      <input type='button' value="+" onClick={handalClick}></input>
      <span>{count}</span>
      <input type='button' value= "-" onClick={handalChange}></input>

    </div>
  )
}
