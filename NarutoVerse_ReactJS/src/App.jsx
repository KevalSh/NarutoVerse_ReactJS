import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Imagebar from './Components/Imagebar'
import Hokagebar from './Components/Hokagebar'
import Hokagecard from './Components/Hokagecard'
import Hokageinfo from './Components/Hokageinfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Navbar />
      <Imagebar /> 
      <Hokagebar />
      <Hokagecard />
      <Hokageinfo />
    </>
  )
}

export default App
