import runningWaterAudioPath from '../assets/soundFX/running-water.mp3'
import windInTreesAudioPath from '../assets/soundFX/wind-in-trees-chimes.mp3'
import fireplaceAudioPath from '../assets/soundFX/fireplace.mp3'
import tibetanBowlAudioPath from '../assets/soundFX/tibetan-bowl.mp3'

import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Howl, Howler } from 'howler'

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
  const [ isMeditating, setIsMeditating ] = useState(false)
  const [ audio, setAudio ] = useState(null)

  const [ appClasses, setAppClasses ] = useState(['App', 'p-5 m-auto container-fluid d-flex flex-column align-items-center justify-content-center'])

  const handleColorChange = function(color) {
    let selectedTheme = Config.themes.find(theme => theme.color === color) // Find new them by color

    setTheme(selectedTheme) // Set theme inline with selection

    setAudio(getAudio(getAudioSrc(selectedTheme.name))) // Set new audio source inline with theme

    if(isMeditating) { 
      setIsMeditating(false) // Stop meditating 
      audio.stop() // Cut audio only when meditating
      return
    }
  }

  const handleMuteChange = function() {
    let newMuteStatus = !isMuted
    newMuteStatus ? audio.mute(true) : audio.mute(false) // Cut audio if meditating; do not stop meditating 
    setIsMuted(newMuteStatus)
  }

  const handleMeditationClick = function() {
    if(!isMuted) {
      if(isMeditating) {
        audio.stop() // Stop audio on meditation and if unmuted
      }
      else {
        audio.play() // Play audio on meditation and if unmuted
      }
    }

    setIsMeditating(currentStatus => !currentStatus)
  }

  const getAudioSrc = function(themeName) {
    let audioSrc = ''
    switch(themeName) {
      case 'water': 
            audioSrc = runningWaterAudioPath
            break;
        case 'wind':
            audioSrc = windInTreesAudioPath
            break;
        case 'fire':
            audioSrc = fireplaceAudioPath
            break;
        case 'earth':
            audioSrc = tibetanBowlAudioPath
            break;
        default: break;
    }

    return audioSrc
  }

  const getAudio = function(audioSrc) { 
    return new Howl({
      src: [ audioSrc ],
      autoplay: false,
      loop: true,
      volume: 0.5
    }) 
  }

  useEffect(() => {
    setAudio(getAudio(getAudioSrc(theme.name)))
  }, [ setAudio ])

  useEffect(() => {
  }, [ isMuted ])

  return (
    <div className={appClasses.join(' ')} style={{ backgroundColor: theme.color }}>
      <Menu handleColorChange={handleColorChange} handleMuteChange={handleMuteChange} />
      <Meditator theme={theme} isMuted={isMuted} isMeditating={isMeditating} handleMeditationClick={handleMeditationClick} />
    </div>
  )
}
