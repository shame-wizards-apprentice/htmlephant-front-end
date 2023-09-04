import React from 'react'
import icon from './icon.png'


export default function Sound() {

    function handleClick() {
        if (document.querySelector('#player').style.display === "none") {
            document.querySelector('#player').style.display = "block" 
        } else {
            document.querySelector('#player').style.display = "none" 
        }
        
    }

    return (
        <img className={'sound'}
            onClick={handleClick}
            src={icon}
            alt="sound icon"
            style={{
                zIndex: '6',
                position: 'fixed',
                top: '0',
                left: '0'
            }}
        />
    )
}
