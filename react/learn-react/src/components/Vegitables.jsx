import React from 'react'

function Vegitables() {
    let Veggies = [
  {
    name: "carrot",
    color:"orange",
    price: 30
  },
  {
   name: "potato",
   color: "brown",
   price: 20
  }
]
  return (
    <div>
{
Veggies.map((element,index)=>(
<div className="" key={index}>
    <p>{element.name},
        it color: {element.color}
          price: ${element.price}</p>

</div>
))
}
    </div>
  )
}

export default Vegitables