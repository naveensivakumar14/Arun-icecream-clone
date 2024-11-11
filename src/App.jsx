 import { useState } from 'react'
// import './App.css'


import Navbar from './components/Navbar'
// import Herotop from './components/Herotop'
import VerticalSlideHero from './verticalSlideHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <VerticalSlideHero/>
     
    </>
  )
}

export default App
