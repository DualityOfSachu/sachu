import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddBook from './components/Addbook'
import ViewBook from './components/ViewBook'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewBook/>}></Route>
        <Route path='/add' element={<AddBook/>}></Route>
        {/* <Route path='/add' element={<Pringleform/>}></Route> */}
      </Routes>
    </>
  )
}

export default App
