import React, { useEffect, useState } from 'react'

function Profile() {
    const [user,setUser] = useState(null)
    useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/users/1')
           .then((res)=> res.json())
           .then((data)=> setUser(data))
           .catch((err)=>console.log(err))
           console.log(user)
    },[user])

  return (
    <div>
    {
user ?  <>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
             </> : <p>Loading.......</p>
             
    }
  
<button >Edit</button>
   
    </div>
  )
}

export default Profile