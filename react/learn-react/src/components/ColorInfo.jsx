import React from 'react'
import ColorDisplay from './colorDisplay'

function ColorInfo() {
   let color = ['red', 'green', 'blue']
  return (
    <div>
        <ColorDisplay colors = {color}/>
    </div>
  )
}

export default ColorInfo