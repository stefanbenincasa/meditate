import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import '../styles/App.css'

export default function Meditator() {
  const [ meditationClasses, setMeditationClasses ] = useState(['h-50', 'w-25', 'text-white'])
  const { theme, isMeditating, isMuted, setTheme, setIsMeditating, setIsMuted } = useContext(Context)

  return (
    <div className='Meditator h-75 w-75 p-5 mt-4 mx-auto container-fluid border d-flex flex-column align-items-center justify-content-center bg-secondary-subtle'>
      <button className={meditationClasses.join(' ')} onClick={() => {}} style={{ backgroundColor: theme.color }}>
        Meditate
      </button>
    </div>
  )
}
