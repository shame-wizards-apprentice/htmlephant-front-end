import React from 'react'
import handleMovement from './movement'
import uparrow from './uparrow.png'
import downarrow from './downarrow.png'
import rightarrow from './rightarrow.png'
import leftarrow from './leftarrow.png'

import './style.css'


export default function Dpad() {


    return (
        <div className={'dpad'} style={{position: 'absolute', bottom: '5px', left: '5px'}}>
            <div className={'row'} style={{ textAlign: 'center' }}>
                <button onClick={() => handleMovement("NORTH")}>
                    <img className={'dpadButton'} src={uparrow} alt="up arrow"></img>
                </button>
            </div>

            <div className={'row'}>
                <button onClick={() => handleMovement("WEST")}>
                    <img className={'dpadButton'} src={leftarrow} alt="left arrow"></img>
                </button>
                <button style={{ float: 'right' }} onClick={() => handleMovement("EAST")}>
                    <img className={'dpadButton'} src={rightarrow} alt="right arrow"></img>
                </button>
            </div>

            <div className={'row'} style={{ textAlign: 'center' }}>
                <button onClick={() => handleMovement("SOUTH")}>
                    <img className={'dpadButton'} src={downarrow} alt="down arrow"></img>
                </button>
            </div>
        </div>
    )
}
