import React from 'react'
import Nvabar from './component/Nvabar'
import Home from './component/Home'
import { Routes, Route } from 'react-router-dom'
import Details from './component/Details'

const App = () => {
  return (
    <div>
      <Nvabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
