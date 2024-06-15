import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import Config from '../assets/config.json'

import '../styles/App.css'

// Depending on current theme, render approprate audio source
export default function AudioPlayer({audioSrc, isPlayingAudio}) {
  const audioPlayerRef = useRef(null)
  const audioContext = new AudioContext();

  useEffect(() => {
    console.log(audioSrc)
  }, [isPlayingAudio])

  return (
    <div className='AudioPlayer'>
      <audio ref={audioPlayerRef}> 
        <source src={audioSrc} type='audio/mpeg'></source> 
      </audio>
    </div>
  )
}
