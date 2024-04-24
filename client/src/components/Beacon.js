import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import { Icon } from './Icon.js'

import '../styles/App.css';

function Beacon() {
  const [ classes, setClasses ] = useState("meditate");

  useEffect(() => {
  }, [setClasses]) 

  const toggleMeditation = function(e, classes) {
    e.preventDefault()
  }

  return (
    <div id="Beacon" 
    className="p-5 m-auto container-fluid d-flex flex-column align-items-center justify-content-center">
      <button className={classes} onClick={e => toggleMeditation(e, classes)}>
        Sample Text
      </button>
    </div>
  )
}

export default Beacon;

