import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Switch, Route, Link, useLocation } from "react-router-dom"

const Landing = (props) => {
    const changepage = props.changepage

    const landingVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, ease: "easeInOut" }
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' }
        }
    }

    return (
        <motion.div variants={landingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="landing-page">
            <motion.div
                    initial={{
                        y: 0
                    }}
                    animate={{
                        y: -100,
                        transition: { duration: 1, ease: "easeInOut", delay: 6.5 }
                    }}
                    className="landing-text">
                    <h1>Hi, I am Patrick Xu.</h1>
                </motion.div>
            <Link to="/home">
                <motion.div
                        initial={{
                            opacity: 0,
                            background: "transparent"
                        }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 1, ease: "easeInOut", delay: 7.5 }
                        }}
                        onClick={() => changepage("home")}
                        className="landing-button">
                        Enter
                    </motion.div>
            </Link>
        </motion.div>
    )
}

export default Landing
