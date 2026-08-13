import React, { useState } from 'react'

function AgeVarification() {
  const [age, setAge] = useState(0)

    let handleChage = (e)=>{
setAge(e.target.value)
    }
  return (
    <div>
        <input type="text"  onChange={handleChage }/>
        {/* <button onClick={(e)=> console.log(e)}>click</button> */}
{age}
         <p>
        {
            age >=18 ? 'You are eligible': 'You are not eligible'
        }
        </p>
    </div>
  )
}

export default AgeVarification