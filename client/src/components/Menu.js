import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import Config from '../assets/config.json'

import '../styles/App.css'

export default function Menu({handleColorChange, handleSoundAllowanceChange, willAllowSound}) {
    return (
        <nav className='ControlPanel row w-75'>
            <div className='col-2 h-100 me-3'>
                <div className='row h-100'>
                    <button className='col-44 p-4 btn d-flex flex-column justify-content-center align-items-center text-bg-secondary'>
                        <i className='bi bi-palette-fill border-none' style={{ fontSize: '2rem' }}></i>
                    </button>
                </div>
            </div>

            <div className='col-2'>
                <div className='row'>
                    <button 
                    className='col-12 p-4 btn d-flex flex-column justify-content-center align-items-center text-bg-secondary'
                    onClick={handleSoundAllowanceChange}>
                        { 
                            willAllowSound ? 
                            <i className='bi bi-volume-up-fill' style={{ fontSize: '2rem' }}></i> : 
                            <i className='bi bi-volume-mute-fill' style={{ fontSize: '2rem' }}></i> 
                        }
                    </button>
                </div> 
            </div>

            <div className='col-8'></div>
        </nav>     
    )
}

/*

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
*/