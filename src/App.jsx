//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Counter from './Components/Counter'

function App() {
  console.log('hi')
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/calc" element={<Counter />} />
      </Route>
      
    </Routes>
  )
}

export default App
