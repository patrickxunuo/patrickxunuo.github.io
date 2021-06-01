import React from 'react'
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";

export const Footer = () => {
    const location = useLocation()
    const pathname = location.pathname
    
    return (
        <footer style={pathname==="/"?{position:"relative", bottom:"none"}:{ position:"absolute", bottom:"0"}}>
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
