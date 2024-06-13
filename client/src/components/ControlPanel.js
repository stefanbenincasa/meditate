import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import Context from './Context.js'
import Icon from './Icon.js'

import '../styles/App.css'

// To Do:
// Color change options toggle
// Sound effect change toggle 

function ControlPanel() {
    const [ colors, setColors ] = useState([])
    const [ soundEffects, setSoundEffects ] = useState([])
    
    return (
        <nav className='ControlPanel row w-75 mx-auto'>
            <div className='col-6'>
                <div className='row'>
                    <label className='col-3 p-4 bg-secondary text-white d-flex flex-column justify-content-center align-items-center'>Colors</label>
                    <span className='col'></span>
                </div>
            </div>

            {/* <div className='col-6'>Sound Effects</div> */}
        </nav>     
    )
}

export default ControlPanel