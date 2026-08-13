import React, { useState } from 'react'

export default function HideAndShow() {
    const [show, setShow] = useState(false)
    // const handleClick = ()=>{
    //     setShow(true)
    // }
  return (
    <div>
        {/* <button onClick={handleClick}>Show</button>
        <button onClick={()=>setShow(false)}>Hide</button> */}
        <button onClick={()=>setShow(!show)}>{show ? 'HIDE': 'SHOW'}</button>
        {
         show &&  <p>Hai... I am here......... lets go....</p>
        }
     
    </div>
  )
}
