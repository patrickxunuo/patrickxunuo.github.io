import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

export const Header = () => {
    const [navState, setNavState] = useState(false)
    const logoSvg = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1
        }
    }

    const toggleState = () => {
        if (navState === false) document.getElementById("nav-toggle").checked = false;
        if (navState === true) document.getElementById("nav-toggle").checked = true;
        setNavState(!navState)
    }

    return (
        <header>
            <div className="header-wrap">
                <div className="header-logo">
                    <blink id="blink-logo">Pat</blink>
                </div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" onClick={() => setNavState(!navState)} />
                <Navbar toggleState={toggleState} />
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>
                <div className="nav-canvas"></div>
            </div>
        </header>
    )
}

export default Header