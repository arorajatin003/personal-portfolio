import React, { useEffect, useState } from 'react'
import "./header.css"
function Header({isScroll}) {
    
    return (
        <div className="header">
            <nav className={`header__nav ${isScroll ? "active" : ""}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </nav>
        </div>
    )
}

export default Header
