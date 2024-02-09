import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Home from './components/Home'
import MyFooter from './components/MyFooter'
import ShortDist from './components/ShortDist'
import Cards from './components/Cards' 

function App() {

  return (
    <div className='component-container'>
     <Home/>
     <ShortDist/>
     <Cards/>
     <MyFooter/>
    </div>
  )
}

export default App
