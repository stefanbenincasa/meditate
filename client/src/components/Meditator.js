import runningWaterAudioPath from '../assets/soundFX/running-water.mp3'
import windInTreesAudioPath from '../assets/soundFX/wind-in-trees-chimes.mp3'
import fireplaceAudioPath from '../assets/soundFX/fireplace.mp3'
import tibetanBowlAudioPath from '../assets/soundFX/tibetan-bowl.mp3'

import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import '../styles/App.css'

export default function Meditator({theme, isMuted, isMeditating, handleMeditationClick}) {
  return (
    <div className='Meditator h-75 w-75 p-5 mt-4 mx-auto container-fluid border d-flex flex-column align-items-center justify-content-center bg-secondary-subtle'>
      <button 
      className={(isMeditating ? 'meditate ' : '') + 'h-50 w-25 text-white'} 
      onClick={handleMeditationClick} 
      style={{ backgroundColor: theme.color }}>
        Meditate
      </button>
    </div>
  )
}
