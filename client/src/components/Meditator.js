import runningWaterAudioPath from '../assets/soundFX/running-water.mp3'
import windInTreesAudioPath from '../assets/soundFX/wind-in-trees-chimes.mp3'
import fireplaceAudioPath from '../assets/soundFX/fireplace.mp3'
import tibetanBowlAudioPath from '../assets/soundFX/tibetan-bowl.mp3'

import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Howl, Howler } from 'howler';

import '../styles/App.css'

export default function Meditator({theme, isMuted, isMeditating, setIsMeditating}) {
  const [ meditationClasses, setMeditationClasses ] = useState(['h-50', 'w-25'])
  const soundRef = useRef(null)


  const handleMeditationClick = function(isMuted, isMeditating, setIsMeditating, setMeditationClasses) {
    let sound = new Howl({ src: [ getRelevantAudioSrc(theme.name)], html5: true, autoplay: false })

    if(isMeditating) {
      setIsMeditating(false)
      setMeditationClasses(currentClasses => currentClasses.filter(c => c != 'meditate'))
      return
    }

    setIsMeditating(true)
    setMeditationClasses(currentClasses => [ ...currentClasses, 'meditate' ])
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

  return (
    <div className='Meditator h-75 w-75 p-5 mt-4 mx-auto container-fluid border d-flex flex-column align-items-center justify-content-center'>
      <button className={meditationClasses.join(' ')} onClick={() => handleMeditationClick(isMuted, isMeditating, setIsMeditating, setMeditationClasses)}>
        Meditate
      </button>
    </div>
  )
}
