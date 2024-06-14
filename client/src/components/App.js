import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import Beacon from './Beacon.js'
import ControlPanel from './ControlPanel.js'
import AudioPlayer from './AudioPlayer.js'
import Config from '../assets/config.json'

import '../styles/App.css'

/*
 
   To Do
   
   [X] Context API implementation
   [X] Main meditation element
   [X] Toggles for colors 
   [] Play sound inline with theme 

   [] Advertisement integration; ethically
   [] Responsiveness; for now, handle mobile case with Error

*/

export default function App() {
  const [ isMeditating, setIsMeditating ] = useState(false)
  const [ isMuted, setIsMuted ] = useState(false)
  const [ theme, setTheme ] = useState(Config.themes[0])

  const [ appClasses, setAppClasses] = useState(['App'])

  // Initialisation
  useEffect(() => {
    setAppClasses(currentClasses => {
      return [ 
        ...currentClasses, 
        'p-5 m-auto container-fluid d-flex flex-column align-items-center justify-content-center'
      ]
    })
  }, [setTheme])

  return (
    <Context.Provider value={{ theme, isMuted, isMeditating, setIsMeditating, setTheme, setIsMuted }}>
      <div className={appClasses.join(' ')} style={{ backgroundColor: theme.color }}>
        <ControlPanel />
        <AudioPlayer />
        <Beacon />
      </div>
    </Context.Provider>
  )
}
