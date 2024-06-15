import runningWaterAudioPath from '../assets/soundFX/running-water.mp3'
import windInTreesAudioPath from '../assets/soundFX/wind-in-trees-chimes.mp3'
import fireplaceAudioPath from '../assets/soundFX/fireplace.mp3'
import tibetanBowlAudioPath from '../assets/soundFX/tibetan-bowl.mp3'

import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import '../styles/App.css'

export default function Meditator({theme, isMuted, isMeditating, setAudioSrc, setIsMeditating, setIsPlayingAudio}) {
  const [ meditationClasses, setMeditationClasses ] = useState(['h-50', 'w-25'])

  const handleMeditationClick = function(theme, isMuted, isMeditating, setIsMeditating, setMeditationClasses, setAudioSrc, setIsPlayingAudio) {
    if(!isMeditating) {
      // Set meditation status
      setIsMeditating(true)

      // Commence mediation animation
      setMeditationClasses(currentClasses => [ ...currentClasses, 'meditate' ])
      
      // Exit before audio interaction if muted
      if(isMuted) return

      // Set relevant audio src by selected theme
      setAudioSrc(getRelevantAudioSrc(theme.name)) 

      // Play audio; only once audio element has rendered
      setIsPlayingAudio(true)

      return
    }
  }

  const getRelevantAudioSrc = function(themeName) {
    let relevantAudioSrc = ''
    switch(themeName) {
      case 'water': 
        relevantAudioSrc = runningWaterAudioPath
        break;
      case 'wind':
        relevantAudioSrc = windInTreesAudioPath
        break;
      case 'fire':
        relevantAudioSrc = fireplaceAudioPath
        break;
      case 'earth':
        relevantAudioSrc = tibetanBowlAudioPath
        break;
      default: break;
    }

    return relevantAudioSrc
  }

  useEffect(() => {
  }, [setMeditationClasses])

  return (
    <div className='Meditator h-75 w-75 p-5 mt-4 mx-auto container-fluid border d-flex flex-column align-items-center justify-content-center'>
      <button className={meditationClasses.join(' ')} onClick={() => handleMeditationClick(theme, isMuted, isMeditating, setIsMeditating, setMeditationClasses, setAudioSrc, setIsPlayingAudio)}>
        Meditate
      </button>
    </div>
  )
}
