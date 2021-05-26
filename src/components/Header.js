import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import Logosvg from './svg/logo.svg';

export const Header = () => {

    const logoSvg = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1
        }
    };


    return (
        <header>
            <div className="header-logo">
                <motion.img
                    viewBox="0 0 100 100"
                    src={Logosvg}
                    className="logo-svg" variants={logoSvg}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />
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