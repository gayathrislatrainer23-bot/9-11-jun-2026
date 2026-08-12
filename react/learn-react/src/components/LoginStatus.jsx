import React from 'react'
import LoginDisplay from './LoginDisplay'

function LoginStatus() {
    let user = {
          name: "Manu",
           isLoggedIn: true 
    }
  return (
    <LoginDisplay user = {user} />
  )
}

export default LoginStatus