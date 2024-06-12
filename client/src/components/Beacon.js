import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import { Context } from './Context'
import { Icon } from './Icon.js'

import '../styles/App.css'

function Beacon() {
  const [ buttonClasses, setButtonClasses ] = useState('')
  const [ meditationClasses, setMeditationClasses ] = useState([])

  const { isMeditating, setIsMeditating } = useContext(Context)

  useEffect(() => {
    let newMeditationClasses
    if(isMeditating) {
      newMeditationClasses = meditationClasses.filter(item => item != 'meditate')
    }
    else {
      meditationClasses.push('meditate')
      newMeditationClasses = [ ...meditationClasses ]
    }

    setMeditationClasses(newMeditationClasses)
    
  }, [isMeditating])

  const toggleMeditation = function(e) {
    setIsMeditating(currentState => !currentState)
  }

  const removeClass = function(currentClasses, classForRemoval) {
    if(!currentClasses) return []
    return currentClasses.filter(classs => classs != classForRemoval)
  }

  const addClass = function(currentClasses, classForAddition) {
    if(!currentClasses) return []
    return currentClasses.push(classForAddition)
  }

  return (
    <div id='Beacon' className='p-5 m-auto container-fluid d-flex flex-column align-items-center justify-content-center'>
      <button className={meditationClasses.join(' ')} onClick={toggleMeditation}>
        Sample Text
      </button>
    </div>
  )
}

export default Beacon

