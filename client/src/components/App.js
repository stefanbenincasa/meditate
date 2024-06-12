import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import Beacon from './Beacon'
import Icon from './Icon'

import '../styles/App.css'

/*
 
   To Do
   
   [X] Context API implementation
   [X] Main meditation element

   [] Toggles for colors and sound-effects
   [] Advertisement integration; ethically
   [] Responsiveness; for now, handle mobile case with Error

*/

function App() {
  const [ isMeditating, setIsMeditating ] = useState(false)

  const appClasses = 'p-5 m-auto container-fluid d-flex flex-column align-items-center justify-content-center'

  return (
    <Context.Provider value={{ isMeditating, setIsMeditating }}>
      <div id='App' className={appClasses}>
        <Beacon />
      </div>
    </Context.Provider>
  )
}

export default App;
