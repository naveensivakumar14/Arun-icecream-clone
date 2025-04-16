 import { useState } from 'react'
// import './App.css'


import Navbar from './components/Navbar'
import Herotop from './components/Herotop'
import Slider from './components/banner'
import Arunad from './components/arun_ad'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Slider/>
     <Herotop/>
     <Arunad/>
    </>
  )
}

export default App
