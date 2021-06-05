import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom"

export const Header = () => {
    const location = useLocation()
    const pathname = location.pathname

    const [navState, setNavState] = useState(false)

    const toggleState = () => {
        if (navState === false) document.getElementById("nav-toggle").checked = false;
        if (navState === true) document.getElementById("nav-toggle").checked = true;
        setNavState(!navState)
    }

    return (
        <header>
            <div className="header-wrap">
                <div className="header-logo">
                    <a id="blink-logo">Pat</a>
                </div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" onClick={() => setNavState(!navState)} />
                <Navbar toggleState={toggleState} pathname={pathname} />
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>
                <div className="nav-canvas"></div>
            </div>
        </header>
    )
}

export default Header