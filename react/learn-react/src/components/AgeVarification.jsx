import React from 'react'

function AgeVarification() {
    let age = 18
  return (
    <div>
        <input type="text"  onChange={(e)=> console.log(e.target.value) }/>
        <button onClick={(e)=> console.log(e)}>click</button>

         <p>
        {
            age >=18 ? 'You are eligible': 'You are not eligible'
        }
        </p>
    </div>
  )
}

export default AgeVarification