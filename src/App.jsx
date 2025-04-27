 import { useState } from 'react'
// import './App.css'


import Navbar from './components/Navbar'
import Herotop from './components/Herotop'
import Slider from './components/banner'
import Arunad from './components/arun_ad'
import FlavorSlider from './components/Flavourslider'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Slider/>
     <Herotop/>
     <FlavorSlider/>
     <Arunad/>
    </>
  )
}

export default App
