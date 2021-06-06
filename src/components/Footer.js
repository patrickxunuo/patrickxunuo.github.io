import React from 'react'
import { motion } from 'framer-motion';
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";

export const Footer = () => {
    const location = useLocation()
    const pathname = location.pathname

    const footerVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: { delay: 2, duration: 1 }
        }
    }
    return (
        <motion.footer variants={footerVariants} initial="initial" animate="animate">
            <div className="social-icon">
                <a href="https://www.instagram.com/xunpat/" className="fa fa-instagram" rel="noopener noreferrer" title="Instagram"> </a>
                <a href="https://www.facebook.com/patrick.hui.9028/" className="fa fa-facebook" rel="noopener noreferrer" title="Facebook"> </a>
                <a href="https://twitter.com/ecc9e7a260844b5" className="fa fa-twitter" rel="noopener noreferrer" title="Twitter"> </a>
            </div>
            <p>Copyright &copy; 2021 Patrick Xu</p>
        </motion.footer>
    )
}

export default Footer
