import React from 'react'
import Home from './pages/Home'
import CV from './pages/CV'
import { Routes,Route } from 'react-router-dom'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create_resume' element={<CV/>}/>
      
    </Routes>
  )
}

export default AllRoutes
