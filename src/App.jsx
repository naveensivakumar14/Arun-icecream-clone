 import { useState } from 'react'
// import './App.css'


import Navbar from './components/Navbar'
import Herotop from './components/Herotop'
import Slider from './components/banner'
import Arunad from './components/arun_ad'
import FlavorSlider from './components/Flavourslider'



function App() {


  const [selectedFlavor, setSelectedFlavor] = useState("Strawberry"); // default

  const handleSelectFlavor = (flavorName) => {
    setSelectedFlavor(flavorName);
  };


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
