import React, { useState } from 'react'

function Token() {
    let [count,setCount]= useState(0);
    let [message,setMessage]= useState('please wait');
    let handleClick = ()=>{
        setCount(count+1)
    //    if(count === 0){
    //   setMessage('please wait')
    //    }else if(count%2 ===0){
    //     setMessage('Patient go to Room 2')
    //    }else{
    //       setMessage('Patient go to Room 1')
    //    }
    }

  return (
    <div>
        <button onClick={()=>handleClick()}>get your token </button>
<p>{count}</p>
<p>{message}</p>
    <p>{count=== 0 ? 'please wait' 
    : count%2 ===0 ? "Patient go to Room 2" :'Patient go to Room 1'}</p>
    </div>
  )
}

export default Token