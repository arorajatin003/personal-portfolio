import React, { useEffect, useState } from 'react'
import "./header.css"
function Header({isScroll}) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="header">
             { openMenu==true ?
                (<div className='header__menu'> 
                    <span onClick={()=>{setOpenMenu(false)}} class="material-symbols-outlined">
                        close
                    </span>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="#work">Experience</a>
                    
                </div>) :
                (<div>
                    <nav className={`header__nav__large header__nav ${isScroll ? "active" : ""}`}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </nav>
                    <nav className={`header__nav__small header__nav ${isScroll ? "active" : ""}`}>
                        <li><a href='/'>Jatin Arora</a></li>
                        <li><span onClick={()=>{setOpenMenu(true)}} className="material-symbols-outlined">menu</span></li>
                    </nav>
                </div>)
            }
            
           
        </div>
    )
}

export default Header
