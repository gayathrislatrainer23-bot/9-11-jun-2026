import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  let navigate =useNavigate()
  const handleSubmit =  async (e)=>{
e.preventDefault()
     let    response =  await 
     fetch('https://jsonplaceholder.typicode.com/users/1', {email,password})
           console.log(response)
           if(response.ok){
        navigate('/profile')
           }

  }
  return (
    <div><form onSubmit={handleSubmit}>
 
    <input  type="text" value={email} onChange={(e)=>setEmail(e.target.value)} 
     placeholder="email" />
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} 
     placeholder="password" />
  
    <button type="submit">Login</button>

</form>

    </div>
  )
}

export default Login