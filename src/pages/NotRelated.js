import React from 'react'
import Loader from '../components/Loader'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom"

const NotRelated = () => {

  const location = useLocation()

  const notrelateVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      y: '+10vh',
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  }

  return (
    <>
      <Loader />
      <motion.div variants={notrelateVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="not-page-wrap">
        <div className="not-content-wrap">
          <div className="not-wrap-title"><h1>Some nonrelated content</h1></div>
        </div>
      </motion.div>
    </>
  )
}

export default NotRelated
