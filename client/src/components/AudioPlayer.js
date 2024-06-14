import runningWaterAudioPath from '../assets/soundFX/running-water.mp3'
import windInTreesAudioPath from '../assets/soundFX/running-water.mp3'
import fireplaceAudioPath from '../assets/soundFX/running-water.mp3'
import tibetanBowlAudioPath from '../assets/soundFX/running-water.mp3'

import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import Config from '../assets/config.json'

import '../styles/App.css'

// Should: render all necessary audio files to match presented themes via color
// Import audio sources, then render in appropriate <audio> element with <source>
export default function AudioPlayer({audioPlayerRef}) {
  const { theme, isPlayingAudio } = useContext(Context)

  // Calculate appropriate audio source given selected theme
  const getAudioSource = function() {
    let webPackSource = Config.themes.find(currentTheme => currentTheme === theme).soundEffect
  }

  return (
    <div>
      <audio> <source type='audio/mpeg'></source> </audio>
      <audio> <source type='audio/mpeg'></source> </audio>
      <audio> <source type='audio/mpeg'></source> </audio>
      <audio> <source type='audio/mpeg'></source> </audio>
    </div>
  )
}

