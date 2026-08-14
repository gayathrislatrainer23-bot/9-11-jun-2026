import React, { useState } from 'react'
import summer from '../assets/summer.avif'
import winter from '../assets/winter.jpg'
import normal from '../assets/climate-normal.jpg'
function ImageDisplay() {
    let [temp,setTemp] = useState()
  return (
    <div>
        <label htmlFor="">temprature</label>
        <input type="text" onChange={(e)=>setTemp(e.target.value)}/>
        {/* {temp >= 20 && temp <=30   ? <img src={normal} alt='' /> : temp> 30 && <img src={summer} alt='' /> ||  temp<20 && <img src={winter}/>  } */}
    {/* {temp<=20 ?  <img src={winter}/> : temp >= 20 && temp <=30   && <img src={normal} alt='' />   || temp >30 &&  <img src={summer} alt='' />  } */}
    {temp<=20 &&  <img src={winter}/> }
    {temp >= 20 && temp <=30   &&  <img src={normal}/> }
    {temp >30 &&  <img src={summer}/> }
    </div>
  )
}

export default ImageDisplay