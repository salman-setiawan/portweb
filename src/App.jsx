import React from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import Project from './pages/Project';
import { Routes, Route } from "react-router-dom";
import Experience from './pages/Experience';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article' element={<Article />} />
        <Route path='/project' element={<Project />} />
        <Route path='/experience' element={<Experience />} /> 
      </Routes>
    </div>
  )
}

export default App