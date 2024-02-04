import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Home from './components/Home'
import MyFooter from './components/MyFooter'
import ShortDist from './components/ShortDist'

function App() {

  return (
    <div className='component-container'>
     <Home/>
     <ShortDist/>
     <MyFooter/>
    </div>
  )
}

export default App
