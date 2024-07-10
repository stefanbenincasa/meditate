import runningWaterAudioPath from '../assets/soundFX/running-water.mp3'
import windInTreesAudioPath from '../assets/soundFX/wind-in-trees-chimes.mp3'
import fireplaceAudioPath from '../assets/soundFX/fireplace.mp3'
import tibetanBowlAudioPath from '../assets/soundFX/tibetan-bowl.mp3'

import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import '../styles/App.css'

export default function Meditator({theme, isMeditating, handleMeditationClick}) {
  return (
    <div className='Meditator h-75 w-75 p-5 my-5 mx-auto container-fluid border-0 d-flex flex-column align-items-center justify-content-center rounded' style={{ backgroundColor: theme.color}}>
      <button 
      className={(isMeditating ? 'meditate ' : '') + 'p-5 d-block border-0'} 
      onClick={handleMeditationClick} 
      style={{ color: theme.color }}>
        { isMeditating ? 'Stop' : 'Meditate' }
      </button>
    </div>
  )
}
