import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import Config from '../assets/config.json'

import '../styles/App.css'

// Depending on current theme, render approprate audio source
export default function AudioPlayer({audioPlayerRef, audioSrc}) {
  // const audioContext = new AudioContext();
  
  // get the audio element
  // const audioElement = document.querySelector("audio");

  // pass it into the audio context
  // const track = audioContext.createMediaElementSource(audioElement);

  // Some calculation will determine audio element returned, and thus the application of
  // the 'audioPlayerRef'

  return (
    <div className='AudioPlayer'>
      <audio muted loop ref={audioPlayerRef}> 
        <source src={audioSrc} type='audio/mpeg'></source> 
      </audio>
    </div>
  )
}

