import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import Config from '../assets/config.json'

import '../styles/App.css'

export default function AudioPlayer() {
  const [ audioPlayerClasses, setAudioPlayerClasses ] = useState(['AudioPlayer'])

  return (
    <div className={audioPlayerClasses.join(' ')}>
      
    </div>
  )
}

