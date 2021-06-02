import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>
            <motion.div
                initial={{
                    y: 0
                }}
                animate={{
                    y: -100,
                    transition: { duration: 1, ease: "easeInOut", delay: 6.5 }
                }}
                className="landing-text"><h1>Hi, I am Patrick Xu.</h1></motion.div>
            <Link to="/home"><motion.div layout
                initial={{
                    opacity: 0,
                    background: "transparent"
                }}
                animate={{
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut", delay: 7.5 }
                }}
                // whileHover={{
                //     boxShadow: "0 0 10px black"
                // }}
                // whileTap={{
                //     scale: 0.95
                // }}
                className="landing-button">Enter</motion.div></Link>
        </>
    )
}

export default Landing
