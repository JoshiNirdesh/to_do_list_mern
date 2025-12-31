import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './components/Landing.jsx'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import Todolist from './components/todolist'
import Home from './components/Home.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
