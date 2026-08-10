import React from 'react'

function ColorDisplay({colors}) {
  return (
    <div>
<p>{colors[0] , colors[1]}</p>

    <p> Primary colors are: 
   {
    colors.map((color,index)=>
    (
        <span key={index}>{color} ,</span>
    )
    )
   }
         </p>

    </div>
  )
}

export default ColorDisplay