import React, { useEffect, useState } from 'react'

function SideEffect() {
    const [count,setCount]= useState(0)
    const [name, setName] = useState('') 
    // case: 1 --> run after all renders
    useEffect(()=>{

        console.log('render every time')
    })
// case: 2 --> run after initial render (run only initially)
useEffect(()=>{
    console.log('render initially')
},[])

// case: 3 --> run after state change   render
useEffect(()=>{
    console.log('render initially and when state inside the dependancy array changes')
},[name])

  return (
    <div>
        SideEffect
        {count}
<button onClick={(()=>setCount(count+1))}>click</button>
<input type="text" onChange={(e)=>setName(e.target.value)} />
{
    name && <p>{name}</p>
}
    </div>
  )
}

export default SideEffect