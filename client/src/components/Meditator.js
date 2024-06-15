import runningWaterAudioPath from '../assets/soundFX/running-water.mp3'
import windInTreesAudioPath from '../assets/soundFX/wind-in-trees-chimes.mp3'
import fireplaceAudioPath from '../assets/soundFX/fireplace.mp3'
import tibetanBowlAudioPath from '../assets/soundFX/tibetan-bowl.mp3'

import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import '../styles/App.css'

export default function Meditator({theme, isMuted, isMeditating, setAudioSrc, audioPlayerRef}) {
  const [ meditationClasses, setMeditationClasses ] = useState(['h-50', 'w-25'])

  // Meditation status and muted status determines audio activation 
  // Then, play sound effect file associated with selected theme
  // I.e. that audio is played, and what specifically is to be played
  const handleMeditationClick = function(theme, isMuted, isMeditating) {
    let newMeditationClasses

    if(!isMeditating) {
      // Commence mediation animation
      newMeditationClasses = meditationClasses.push('meditate')
      setMeditationClasses(newMeditationClasses)
      
      // Play relevant audio to selected theme; if not muted
      if(isMuted) return
      setAudioSrc(getRelevantAudioSrc(theme)) 
      return
    }

    // Stop mediation animation
    newMeditationClasses = meditationClasses.filter(_class => _class != 'meditate')
    setMeditationClasses(newMeditationClasses)

    // Cease audio if not muted
    if(isMuted) return
    // audioPlayerRef.stop()
  }

  const getRelevantAudioSrc = function(theme) {
    let relevantAudioSrc = ''
    switch(theme) {
      case 'water': 
        relevantAudioSrc = runningWaterAudioPath
        break;
      case 'wind': break;
        relevantAudioSrc = windInTreesAudioPath
        break;
      case 'fire': break;
        relevantAudioSrc = fireplaceAudioPath``
        break;
      case 'earth': break;
        relevantAudioSrc = tibetanBowlAudioPath
        break;
      default: break;
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
