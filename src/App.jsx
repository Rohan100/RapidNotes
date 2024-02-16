import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ShortDist from './components/ShortDist'
import Cards from './components/Cards'
import MyFooter from './components/MyFooter'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'


function App() {

  return (
    <div className='component-container'>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
