import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pringle from './components/Pringle'
import Pringleform from './components/Pringleform'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Pringle/>}></Route>
        <Route path='/add' element={<Pringleform/>}></Route>
        {/* <Route path='/add' element={<Pringleform/>}></Route> */}
      </Routes>
    </>
  )
}

export default App
