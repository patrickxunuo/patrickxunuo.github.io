import React from 'react'
import BackgroundSvg from '../components/BackgroundSvg'
import Maincontainer from '../components/Maincontainer'
import TitleExpandFormat from '../components/TitleExpandFormat'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion'
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom"

const Home = () => {

    const location = useLocation()

    const homeVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" }
        },
        exit: {
            opacity: 0,
            y: '+10vh',
            transition: { ease: "easeInOut" }
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
