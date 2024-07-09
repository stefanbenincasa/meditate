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
   [X] Play sound inline with theme 

   [X] Desktop UI
    [X] Mute styling; icon and style
    [X] Theme styling; icon and style

   [X] Mobile UI
    [X] Animation bug; dynamic text sizing and h/w issue
    [X] Modal issue

   [] Overall styling
    [] Max width
    [] Color animations
    [] Touchups
*/

export default function App() {
  const [ theme, setTheme ] = useState(Config.themes[0])
  const [ audio, setAudio ] = useState(null)

  const [ willAllowSound, setWillAllowSound] = useState(true)
  const [ isPlayingSound, setIsPlayingSound ] = useState(false)
  const [ isMeditating, setIsMeditating ] = useState(false)

  const handleColorChange = function(color) {
    let selectedTheme = Config.themes.find(theme => theme.color === color) // Find new theme by color

    setTheme(selectedTheme) // Set theme inline with selection

    let newAudio = getAudio(selectedTheme.name) // Set new audio source inline with theme
    audio._muted && newAudio.mute(true) // Carry over mute status to new audio instance; new audio is default unmuted
    setAudio(newAudio)

    if(isMeditating) { 
      setIsMeditating(false) // Stop meditating 
      if(isPlayingSound) {
        audio.stop() // Cut audio only when meditating
        setIsPlayingSound(false)
      }
    }
  }

  const handleSoundAllowanceChange = function() {
    let soundAllowanceIntent = !willAllowSound

    soundAllowanceIntent ? audio.mute(false) : audio.mute(true)

    setIsPlayingSound(soundAllowanceIntent)
    setWillAllowSound(soundAllowanceIntent)
  }

  const handleMeditationClick = function() {
    let meditationIntent = !isMeditating

    if(meditationIntent) {
      audio.play()
      setIsPlayingSound(willAllowSound) 
    } 
    else {
      audio.stop()
      setIsPlayingSound(false)
    } 

    setIsMeditating(meditationIntent)
  }

  const getAudio = function(themeName) {
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

    return new Howl({
      src: [ audioSrc ],
      autoplay: false,
      loop: true,
      volume: 0.5
    }) 
  }

  useEffect(() => {
    setAudio(getAudio(theme.name))
  }, [ setAudio ])

  return (
    <div className='App m-auto container-fluid d-flex flex-column align-items-center justify-content-center bg-secondary-subtle'>
      <Menu handleColorChange={handleColorChange} handleSoundAllowanceChange={handleSoundAllowanceChange} willAllowSound={willAllowSound} />
      <Meditator theme={theme} isMeditating={isMeditating} handleMeditationClick={handleMeditationClick} />
    </div>
  )
}
