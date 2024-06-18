import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import Menu from './Menu.js'
import Meditator from './Meditator.js'

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
  const [ theme, setTheme ] = useState(Config.themes[0])
  const [ isMuted, setIsMuted ] = useState(false)
  const [ appClasses, setAppClasses ] = useState(['App', 'p-5 m-auto container-fluid d-flex flex-column align-items-center justify-content-center'])

  return (
    <div className={appClasses.join(' ')} style={{ backgroundColor: theme.color }}>
      <Menu setTheme={setTheme} setIsMuted={setIsMuted} />
      <Meditator theme={theme} isMuted={isMuted} />
    </div>
  )
}
