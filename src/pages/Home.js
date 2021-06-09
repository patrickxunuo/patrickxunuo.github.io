import React from 'react'
import BackgroundSvg from '../components/BackgroundSvg'
import Maincontainer from '../components/Maincontainer'
import { motion } from 'framer-motion'
import Loader from '../components/Loader'
import { BrowserRouter as Switch, Route, Link, useLocation } from "react-router-dom"

const Home = () => {

    const homeVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" }
        },
        exit: {
            opacity: 0,
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    }

    return (
        <>
            <motion.div variants={homeVariants}
                initial="hidden"
                animate="visible"
                exit="exit">
                <BackgroundSvg />
                <Maincontainer />
            </motion.div>
        </>
    )
}

export default Home
