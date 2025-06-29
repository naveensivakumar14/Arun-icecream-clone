 import { useState } from 'react'
// import './App.css'


import Navbar from './components/Navbar'
import Herotop from './components/Herotop'
import Slider from './components/banner'
import FlavorSlider from './components/Flavourslider'
import Arunad from './components/arun_ad'
import Footer from './components/footer'




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
     <Footer></Footer>
    </>
  )
}

export default App
