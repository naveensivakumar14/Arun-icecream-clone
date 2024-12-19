 import { useState } from 'react'
// import './App.css'


import Navbar from './components/Navbar'
import Herotop from './components/Herotop'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Herotop/>

    </>
  )
}

export default App
