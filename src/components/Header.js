import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation()
    const pathname = location.pathname
    let headerDis = "block"
    if (pathname === "/") {
        headerDis = "none"
    }

    const [navState, setNavState] = useState(false)

    const toggleState = () => {
        if (navState === false) document.getElementById("nav-toggle").checked = false;
        if (navState === true) document.getElementById("nav-toggle").checked = true;
        setNavState(!navState)
    }

    return (
        <header style={{ display: headerDis }}>
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