import runningWaterAudioPath from '../assets/soundFX/running-water.mp3'
import windInTreesAudioPath from '../assets/soundFX/wind-in-trees-chimes.mp3'
import fireplaceAudioPath from '../assets/soundFX/fireplace.mp3'
import tibetanBowlAudioPath from '../assets/soundFX/tibetan-bowl.mp3'

import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context.js'
import { Howl, Howler } from 'howler';

import Meditator from './Meditator.js'
import Menu from './Menu.js'

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
  const [ audio, setAudio ] = useState(null)
  const [ appClasses, setAppClasses] = useState(['App'])

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
      volume: 0.2
    });
  }

  // Initialisation
  useEffect(() => {
    setAppClasses(currentClasses => {
      return [ 
        ...currentClasses, 
        'p-5 m-auto container-fluid d-flex flex-column align-items-center justify-content-center'
      ]
    })
  }, [setTheme])

  // Adjust audio after theme change
  useEffect(() => {
    setAudio(getAudio(getAudioSrc(theme.name)))
  }, [theme])

  // Stop or start audio after change
  useEffect(() => {
    if(!audio) 
      return

    if(isMeditating) {
      if(isMuted) {
        audio.stop()
        return
      }

      audio.play()
      return
    }

  }, [audio, isMuted, isMeditating])

  return (
    <Context.Provider value={{ theme, audio, isMeditating, isMuted, setTheme, setAudio, setIsMeditating, setIsMuted, getAudioSrc, getAudio }}>
      <div className={appClasses.join(' ')} style={{ backgroundColor: theme.color }}>
        <Menu />
        <Meditator />
      </div>
    </Context.Provider>
  )
}
