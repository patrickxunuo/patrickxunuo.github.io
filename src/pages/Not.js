import React from 'react'
import Loader from '../components/Loader'
import CenterImage from '../images/centerlarge.jpg'
import { motion, AnimatePresence, useTransform } from 'framer-motion'
import { BrowserRouter as Switch, Route, useLocation, Link } from "react-router-dom"

const Not = () => {
    const location = useLocation()

    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    const wordVariantsL = {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: {
                delay: 2,
                delayChildren: 1,
                staggerChildren: 0.10,
                staggerDirection: 1,
            }
        }
    }


    const wordVariantsR = {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: {
                delay: 2,
                delayChildren: 1,
                staggerChildren: 0.15,
                staggerDirection: -1,
            }
        }
    }


    const letterVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: { duration: 1.5, ...transition }
        }
    }


    const imageVariants = {
        initial: {
            scale: 0.7,
            y: -250,
        },
        animate: {
            scale: 2,
            y: 0,
            transition: { delay: 1, ...transition },
        }
    }

    const paraVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 2 }
        }
    }

    return (
        <>
            <Loader />
            <motion.div className="not-page-wrap" initial={{ height: "80vh" }} animate={{ height: "auto" }}>
                <motion.div className="not-content-wrap not-content-top" >
                    <motion.div className="not-text" variants={wordVariantsL} initial="initial" animate="animate" style={{ float: "left" }}>
                        <motion.span variants={letterVariants}>E</motion.span>
                        <motion.span variants={letterVariants}>X</motion.span>
                        <motion.span variants={letterVariants}>P</motion.span>
                        <motion.span variants={letterVariants}>L</motion.span>
                        <motion.span variants={letterVariants}>O</motion.span>
                        <motion.span variants={letterVariants}>R</motion.span>
                        <motion.span variants={letterVariants}>E</motion.span>
                    </motion.div>
                    <motion.div className="not-text" variants={wordVariantsR} initial="initial" animate="animate" style={{ float: "right" }}>
                        <motion.span variants={letterVariants}>L</motion.span>
                        <motion.span variants={letterVariants}>I</motion.span>
                        <motion.span variants={letterVariants}>F</motion.span>
                        <motion.span variants={letterVariants}>E</motion.span>
                    </motion.div>
                </motion.div>

                <motion.div className="not-content-wrap not-content-bot" >
                    <motion.div className="not-frame" initial={{ width: "auto", height: "80vh" }} animate={{ width: "100%", delay: 2 }}>
                        <motion.img src={CenterImage}
                            className="not-image"
                            variants={imageVariants}
                            initial="initial"
                            animate="animate"
                        />
                    </motion.div>
                    <motion.div className="not-paragraph" variants={paraVariants} initial="initial" animate="animate">
                        <div className="not-para-left">Recording the moments of life</div>
                        <div className="not-para-right">
                            I am not a photographer, I don't have a expensive camera either.
                            I use my eyes to see and explore. Once there is something memorable,
                            I take out my phone to take a shot. And those, are my moments of life.
                        </div>
                    </motion.div>
                    <motion.button className="not-go">Go For More</motion.button>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Not
