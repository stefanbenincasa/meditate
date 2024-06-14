import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import Config from '../assets/config.json'

import '../styles/App.css'

export default function AudioPlayer() {
  const [ audioPlayerClasses, setAudioPlayerClasses ] = useState(['AudioPlayer'])

  // Should: render all necessary audio files to match presented themes via color
  
  // Import audio sources, then render in appropriate <audio> element with <source>
  return (
    <div className={audioPlayerClasses.join(' ')}>
      
    </div>
  )
}

