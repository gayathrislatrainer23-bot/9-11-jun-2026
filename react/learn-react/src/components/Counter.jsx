import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    function handleNegative(){
        if(count<1){
            setCount(0)
        }
        else{
            setCount(count-1)
        }
    }
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
      <p>{count}</p>
        <button onClick={handleNegative}>-</button>
        <button onClick={()=>setCount(0)}>reset</button>
    </div>
  )
}

export default Counter