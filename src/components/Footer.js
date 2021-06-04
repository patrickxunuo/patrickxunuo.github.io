import React from 'react'
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";

export const Footer = () => {
    const location = useLocation()
    const pathname = location.pathname
    
    let footerDis = "block"
    let footerPos = ""
    let footerBot = ""
    
    if (pathname === "/") {
        // footerDis = "none"
        // footerPos = ""
        // footerBot = ""
    }
    else if (pathname === "/home" || pathname === "/notrelated") {
        footerBot = "none"
        footerPos = "relative"
    }
    else {
        footerBot = "0"
        footerPos = "absolute"
    }

    return (
        <footer style={{ position: footerPos, bottom: footerBot, display: footerDis } }>
            <div className="social-icon">
                <a href="https://www.instagram.com/xunpat/" className="fa fa-instagram" rel="noopener noreferrer" title="Instagram"> </a>
                <a href="https://www.facebook.com/patrick.hui.9028/" className="fa fa-facebook" rel="noopener noreferrer" title="Facebook"> </a>
                <a href="https://twitter.com/ecc9e7a260844b5" className="fa fa-twitter" rel="noopener noreferrer" title="Twitter"> </a>
            </div>
            <p>Copyright &copy; 2021 Patrick Xu</p>
        </footer>
    )
}

export default Footer
