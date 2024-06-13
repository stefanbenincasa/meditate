import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import '../styles/App.css'

function Beacon() {
  const [ buttonClasses, setButtonClasses ] = useState('')
  const [ meditationClasses, setMeditationClasses ] = useState(['h-50', 'w-25'])

  const { isMeditating, setIsMeditating } = useContext(Context)

  const toggleMeditation = function(e) {
    let newMeditationClasses

    if(isMeditating) {
      newMeditationClasses = meditationClasses.filter(item => item != 'meditate')
    }
    else {
      meditationClasses.push('meditate')
      newMeditationClasses = [ ...meditationClasses ]
    }

    setMeditationClasses(newMeditationClasses)
    setIsMeditating(currentState => !currentState)
  }

  return (
    <div className='Beacon h-75 w-75 p-5 mt-4 mx-auto container-fluid border d-flex flex-column align-items-center justify-content-center'>
      <button className={meditationClasses.join(' ')} onClick={toggleMeditation}>
        Sample Text
      </button>
    </div>
  )
}

export default Beacon

