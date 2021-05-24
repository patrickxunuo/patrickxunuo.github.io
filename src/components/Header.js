import React from 'react'
import Navbar from './Navbar'

export const Header = () => {
    return (
        <header>
            <div className="header-breadcrumb">
                patxu.home
            </div>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <Navbar />
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
            <div className="nav-canvas"></div>
        </header>
    )
}

export default Header