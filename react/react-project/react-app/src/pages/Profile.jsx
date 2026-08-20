import React, { useState } from 'react'

function Profile() {
    const [user,setUser] = useState(null)
  return (
    <div>
    {
user ?  <>
        <p>Name: {user.name}</p>
        <p>email: {user.email}</p>
             </> : <p>Loading.......</p>
    }

   
    </div>
  )
}

export default Profile