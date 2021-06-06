import React from 'react'
import Loader from '../components/Loader'
import ProgressiveImage from 'react-progressive-image'
import CenterImage from '../images/centersmall.jpg'
import {motion} from 'framer-motion'
import {BrowserRouter as Switch, Route, useLocation, Link} from "react-router-dom"

const NotRelated = () => {
    const location = useLocation()

    const notrelateVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {duration: 1, ease: "easeInOut"}
        },
        exit: {
            opacity: 0,
            y: '+10vh',
            transition: {duration: 1.5, ease: "easeInOut"}
        }
    }


    return (
        <>
            <Loader/>
            <motion.div variants={notrelateVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="not-page-wrap">
                <div className="not-content-wrap">
                    <div className="not-thumbnail">
                        <div className="not-frame">
                            <Link to="/notrelated/not">
                                <motion.img src={CenterImage} className="center-image"
                                            whileHover={{
                                                scale: 1.05,
                                                transition: {duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96]}
                                            }}/>
                            </Link>
                        </div>
                    </div>

                    <div className="not-wrap-title">
                        <a style={{float: "left"}}>EXPLORE</a>
                        <a style={{float: "right"}}>LIFE</a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default NotRelated
