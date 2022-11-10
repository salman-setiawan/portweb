import React from 'react'
import Home from './pages/Home'
import Project from './pages/Project'
import { Routes, Route } from "react-router-dom"
import Experience from './pages/Experience'
import Mobtoon from './pages/project/Mobtoon'
import Watsup from './pages/project/Watsup'
import Edufams from './pages/project/Edufams'
import Dualapan from './pages/project/Dualapan'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/experience' element={<Experience />} /> 
        <Route path='/project/mobtoon' element={<Mobtoon />} />
        <Route path='/project/watsup' element={<Watsup />} />
        <Route path='/project/edufams' element={<Edufams />} />
        <Route path='/project/28sept' element={<Dualapan />} />
      </Routes>
    </div>
  )
}

export default App