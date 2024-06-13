import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import Beacon from './Beacon'
import ControlPanel from './ControlPanel'
import Icon from './Icon'

import '../styles/App.css'

/*
 
   To Do
   
   [X] Context API implementation
   [X] Main meditation element
   [] Toggles for colors and sound-effects

   [] Advertisement integration; ethically
   [] Responsiveness; for now, handle mobile case with Error

    <SFXSwitch />
*/

function App() {
  const [ isMeditating, setIsMeditating ] = useState(false)

  useEffect(() => {
    console.log(isMeditating)
  }, [isMeditating])

  const appClasses = 'App p-5 m-auto container-fluid d-flex flex-column align-items-center justify-content-center'

  return (
    <Context.Provider value={{ isMeditating, setIsMeditating }}>
      <div className={appClasses}>
        <ControlPanel />
        <Beacon />
      </div>
    </Context.Provider>
  )
}

export default App;
