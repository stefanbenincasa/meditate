import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import '../styles/App.css'

export default function Meditator({theme, isMuted, isMeditating, setIsMeditating}) {
  const [ meditationClasses, setMeditationClasses ] = useState(['h-50', 'w-25'])

  const handleMeditationClick = function(isMuted, isMeditating, setIsMeditating, setMeditationClasses) {
    if(!isMeditating) {
      setIsMeditating(true)
      setMeditationClasses(currentClasses => [ ...currentClasses, 'meditate' ])
      if(isMuted) return
      return
    }

    setIsMeditating(false)
    setMeditationClasses(currentClasses => currentClasses.filter(c => c != 'meditate'))
    if(isMuted) return
    return
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
  }, [meditationClasses])
  
  useEffect(() => {
      let sound = new Howl({ src: [ getRelevantAudioSrc(theme.name)], html5: true, autoplay: false })

      if(isMeditating && !isMuted) {
          sound.play()
          return
      }

      sound.stop()
  }, [isMeditating, isMuted])

  return (
    <div className='Meditator h-75 w-75 p-5 mt-4 mx-auto container-fluid border d-flex flex-column align-items-center justify-content-center'>
      <button className={meditationClasses.join(' ')} onClick={() => handleMeditationClick(isMuted, isMeditating, setIsMeditating, setMeditationClasses)}>
        Meditate
      </button>
    </div>
  )
}
