import React from 'react'
import Loader from '../components/Loader'
import ProgressiveImage from 'react-progressive-image'
import Not from '../components/Not'
import NotMore from '../components/NotMore'
import CenterImage from '../images/centersmall.jpg'
import {motion, AnimatePresence} from 'framer-motion'
import {BrowserRouter as Switch, Route, useLocation, Link, useRouteMatch } from "react-router-dom"

const NotRelated = () => {
    const location = useLocation()
    const {path, url} = useRouteMatch()
    console.log(`path: ${path}`)
    console.log(`url: ${url}`)

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
            <AnimatePresence >
            <Switch location={location} key={location.key}>
            <Route exact path={path}>
                <motion.div variants={notrelateVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="not-page-wrap">
                    <div className="not-content-wrap">
                        <div className="not-thumbnail">
                            <div className="not-frame">
                                <Link to={`${url}/not`}>
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
            </Route>
            <Route path={`${path}/not`} >
                <Not />
            </Route>
            <Route path={`${path}/more`}>
               <NotMore />
            </Route>
            </Switch>
            </AnimatePresence>
        </>
    )
}

export default NotRelated
