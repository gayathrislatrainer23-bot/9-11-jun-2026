import React from 'react'

function LoginDisplay({user}) {
  return (
    <div>
        {
            user.isLoggedIn ? <p>Welcome back!</p>
             : <p>"Please login"</p>

        }
    </div>
  )
}

export default LoginDisplay