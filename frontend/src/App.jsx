import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<h1>List Page</h1>}/>
        <Route path="/add" element={<h1>Add List Page</h1>}/>
      </Routes>
    </div>
  )
}

export default App
