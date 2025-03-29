import { useState } from 'react'
import './App.css'
import Navbar from './app/components/layout/navBar/navBar'
import Sidebar from './app/components/layout/sideBar/sideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Sidebar/>
    </>
  )
}

export default App
