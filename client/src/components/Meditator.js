import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import '../styles/App.css'

export default function Meditator({isMuted, isMeditating, setIsMeditating, setIsPlayingAudio}) {
  const [ meditationClasses, setMeditationClasses ] = useState(['h-50', 'w-25'])

  const handleMeditationClick = function(isMuted, isMeditating, setIsMeditating, setMeditationClasses, setIsPlayingAudio) {
    if(!isMeditating) {
      // Set meditation status
      setIsMeditating(true)

      // Commence mediation animation
      setMeditationClasses(currentClasses => [ ...currentClasses, 'meditate' ])
      
      // Exit before audio interaction if muted
      if(isMuted) return

      // Play audio
      setIsPlayingAudio(true)

      return
    }
  }

  useEffect(() => {
  }, [setMeditationClasses])

  return (
    <div className='Meditator h-75 w-75 p-5 mt-4 mx-auto container-fluid border d-flex flex-column align-items-center justify-content-center'>
      <button className={meditationClasses.join(' ')} onClick={() => handleMeditationClick(isMuted, isMeditating, setIsMeditating, setMeditationClasses, setIsPlayingAudio)}>
        Meditate
      </button>
    </div>
  )
}
