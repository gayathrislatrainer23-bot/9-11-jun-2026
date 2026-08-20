import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './Components/NavBar'
import Student from './Components/Student'

function App() {
  let name='Manoj'
  let age =21
  const [count, setCount] = useState(0)

  return (
  <div className="">
        <NavBar />
        {/* <Student name={name} age={age}/> */}
        <Student name={name} age={age}/>
  </div>
    
  )
}

export default App
