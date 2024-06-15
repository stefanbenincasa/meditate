import runningWaterAudioPath from '../assets/soundFX/running-water.mp3'
import windInTreesAudioPath from '../assets/soundFX/wind-in-trees-chimes.mp3'
import fireplaceAudioPath from '../assets/soundFX/fireplace.mp3'
import tibetanBowlAudioPath from '../assets/soundFX/tibetan-bowl.mp3'

import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import Config from '../assets/config.json'

import '../styles/App.css'

// Depending on current theme, render approprate audio source
export default function AudioPlayer({theme, isPlayingAudio}) {
  const audioPlayerRef = useRef(null)
  const audioContext = new AudioContext();

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
    if(isPlayingAudio) audioPlayerRef.current.play()
  }, [isPlayingAudio])

  return (
    <div className='AudioPlayer'>
      <audio ref={audioPlayerRef}> 
        <source src={getRelevantAudioSrc(theme.name)} type='audio/mpeg'></source> 
      </audio>
    </div>
  )
}
