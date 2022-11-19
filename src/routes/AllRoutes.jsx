import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/landing page/LandingPage'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
    </Routes>
  )
}
