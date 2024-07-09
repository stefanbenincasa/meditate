import React, { useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import Config from '../assets/config.json'

import '../styles/App.css'

export default function Menu({handleColorChange, handleSoundAllowanceChange, willAllowSound}) {
    const [ hasModal, setHasModal ] = useState(false)

    return (
        <nav className='ControlPanel row w-75'>
            <div className='col-2 h-100 me-3'>
                <div className='row h-100'>
                    <button 
                    className='col-44 p-4 btn d-flex flex-column justify-content-center align-items-center text-bg-secondary'
                    onClick={() => setHasModal(true)}> 
                        <i className='bi bi-palette-fill border-none'></i>
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
                            <i className='bi bi-volume-up-fill'></i> : 
                            <i className='bi bi-volume-mute-fill'></i> 
                        }
                    </button>
                </div> 
            </div>

            <div className='col-8'></div>

            <div className={'modal bg-light bg-opacity-75' + (hasModal ? ' d-flex justify-content-center align-items-center' : '')} style={{ overflow: 'hidden'}} id='themeModal' onClick={() => setHasModal(false)}>
                <div className='modal-dialog h-100 w-75 d-flex align-items-center'>
                    <div className='modal-content h-50'>
                        <div className='modal-header text-bg-secondary px-3' style={{ border: 'none' }}>
                            <h1 className='modal-title fs-3'>Theme Select</h1>
                            <button className='btn p-0' onClick={() => setHasModal(false)}>X</button>
                        </div>
                        <div className='modal-body bg-secondary p-0'>
                            <div className='container-fluid h-100'>
                                <div className='row h-100 p-5'>
                                    {
                                        Config.themes.map(theme => theme.color).map((color, index) => {
                                            return (
                                                <button 
                                                key={index} 
                                                className='col-6 d-inline-block border' 
                                                style={{ backgroundColor: color }}
                                                onClick={() => handleColorChange(color)}>
                                                </button>
                                            )
                                    
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>     
    )
}
