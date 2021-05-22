import React from 'react'
import Navbar from './Navbar'

export const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-breadcrumb">
                    patxu.home
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header