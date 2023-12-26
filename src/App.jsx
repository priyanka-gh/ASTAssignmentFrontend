import React from 'react'
import Login from './components/login/Login'
import "./App.css"
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import Dashboard from './components/dashboard/Dashboard'
const App = () => {
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App