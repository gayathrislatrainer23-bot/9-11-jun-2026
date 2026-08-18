import React, { useState } from 'react'
import ColorDisplay from './colorDisplay'

function ColorInfo() {
  const [show,setShow]= useState(false)
   let color = ['red', 'green', 'blue']
   

  return (
    <div className='colpor-info'>
      <button onClick={()=>setShow(!show)}>{show? 'hide': 'show'}</button>
      { show &&  <ColorDisplay colors = {color}/>}
    </div>
  )
}

export default ColorInfo