import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import Beacon from './Beacon'
import Icon from './Icon'

import '../styles/App.css';

/*
 
   To Do
   
   [] Context API implementation

   X[] Main meditation element
   [] Toggles for colors and sound-effects
   [] Advertisement integration; ethically
   [] Responsiveness; for now, handle mobile case with Error

*/

function App() {
  const [ isMeditating, setIsMeditating ] = useState(false)

  return (
    <div id="App" className="p-5 m-auto container-fluid d-flex flex-column align-items-center justify-content-center">
      <Beacon />
    </div>
  )
}

export default App;

