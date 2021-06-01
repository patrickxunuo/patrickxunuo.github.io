import React from 'react'
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import BackgroundSvg from './components/BackgroundSvg.js'
import Maincontainer from './components/Maincontainer.js'
import TitleExpandFormat from './components/TitleExpandFormat.js';
import NotRelated from './components/NotRelated.js';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";


function App() {
  const location = useLocation()
  const homeVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      y: '+10vh',
      transition: { ease: "easeInOut" }
    }
  }
  const notrelateVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      y: '+10vh',
      transition: { ease: "easeInOut" }
    }
  }

  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <motion.div variants={homeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <BackgroundSvg />
              <Maincontainer />
            </motion.div>
            <Footer />
          </Route>
          <Route exact path="/notrelated">
            <motion.div variants={notrelateVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
              <NotRelated />
            </motion.div>
            <Footer />
          </Route>

          <Route path="/internship">
              <TitleExpandFormat />
            <Footer />
          </Route>
          <Route path="/project">
              <TitleExpandFormat />
            <Footer />
          </Route>
          <Route path="/contact">
              <TitleExpandFormat />
            <Footer />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App

