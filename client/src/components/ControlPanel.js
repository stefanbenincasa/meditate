import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Context } from './Context'

import Config from '../assets/config.json'

import '../styles/App.css'

export default function ControlPanel() {
    const { theme, isMuted, setTheme, setIsMuted } = useContext(Context)

    const handleColorChange = function(color) {
        // Find the appropriate theme for selected color
        let matchedTheme = Config.themes.find(theme => theme.color === color)
        setTheme(matchedTheme)
    }

    return (
        <nav className='ControlPanel row w-75 mx-auto'>
            <div className='col-8 h-100'>
                <div className='row h-100'>
                    <label className='col-4 p-4 bg-secondary text-white d-flex flex-column justify-content-center align-items-center'>X</label>
                    { 
                        Config.themes.map(theme => theme.color).map((color, index) => {
                            return (
                                <button 
                                key={index} 
                                className='col-2 d-inline-block border' 
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorChange(color)}>
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            <div className='col'></div>

            <div className='col-1'>
                <div className='row'>
                    <button 
                    className='col-12 p-4 bg-secondary text-white d-flex flex-column justify-content-center align-items-center'
                    onClick={() => setIsMuted(currentStatus => !currentStatus)}>
                        Mute
                    </button>
                </div> 
            </div>
        </nav>     
    )
}
