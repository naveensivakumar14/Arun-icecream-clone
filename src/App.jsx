 import { useState } from 'react'
// import './App.css'


import Navbar from './components/Navbar'
import Herotop from './components/Herotop'
import Slider from './components/banner'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Herotop/>
    <Slider/>
    </>
  )
}

export default App
