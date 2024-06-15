import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import '../styles/App.css'

export default function Meditator({audioPlayerRef}) {
  const [ meditationClasses, setMeditationClasses ] = useState(['h-50', 'w-25'])

  // Meditation status and muted status determines audio activation 
  // Then, play sound effect file associated with selected theme
  // I.e. that audio is played, and what specifically is to be played
  const handleMeditationClick = function(theme, isMuted, isMeditating) {
    if(!isMeditating) {
      // Commence mediation animation
      // Play relevant audio to selected theme; if not muted
    }

  }

  return (
    <div className='Beacon h-75 w-75 p-5 mt-4 mx-auto container-fluid border d-flex flex-column align-items-center justify-content-center'>
      <button className={meditationClasses.join(' ')} onClick={() => handleMeditationClick(theme, isMuted, isMeditating)}>
        Meditate
      </button>
    </div>
  )
}
