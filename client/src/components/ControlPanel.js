import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import Config from '../assets/config.json'

import '../styles/App.css'

// To Do:
// Color change options toggle
// Sound effect change toggle 

function ControlPanel() {
    const [ color, setColor ] = useState(['red', 'blue', 'green'])
    const [ soundEffect, setSoundEffect ] = useState([])

    useEffect(() => {
        console.log(Config.colors)
    }, [])
    
    return (
        <nav className='ControlPanel row w-75 mx-auto'>
            <div className='col-6'>
                <div className='row'>
                    <label className='col-3 p-4 bg-secondary text-white d-flex flex-column justify-content-center align-items-center'>Colors</label>
                    { Config.colors.map((color, index) => <button key={index} className='col-3 d-inline-block border' style={{ backgroundColor: color}}></button> ) }
                </div>
            </div>
        </nav>     
    )
}

export default ControlPanel