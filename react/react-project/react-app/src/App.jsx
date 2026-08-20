import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Navabar from './components/navbar/Navabar'
import MainPages from './pages/MainPages'
import Profile from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (

  <BrowserRouter>
  <Navabar/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/*' element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App

