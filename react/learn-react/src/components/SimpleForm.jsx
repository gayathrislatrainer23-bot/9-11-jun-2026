import React, { useState } from 'react'

function SimpleForm() {
    const [name,setName]= useState('')
    const [error,setError]= useState('')
    const handleSubmit = (e)=>{
      e.preventDefault()
    //  alert(` hello, ${name}`)
    if(name === ''){
    setError('please enter your name ')
    }else if(name.length < 3){
         setError('name should be more than 3 characters ')   
    }
   
    console.log('form submitted successfully')
}
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='enter your name' value={name}  onChange={(e)=>setName(e.target.value)} />
            <button type='submit'>Login</button>

        </form>
        {error  && <p style={{color: 'red'}}>{error}</p> }
    </div>
  )
}

export default SimpleForm