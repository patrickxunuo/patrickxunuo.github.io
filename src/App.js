import React, { useState } from 'react'
import './App.css'
import Landing from './pages/Landing.js'
import Home from './pages/Home.js'
import NotRelated from './pages/NotRelated'
import TitleExpandFormat from './components/TitleExpandFormat'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion'


function App() {
  const location = useLocation()

  let initialpage = "landing"
  if (location.pathname!=="/")
  initialpage = "home"

  const [pageState, setPageState] = useState(initialpage)

  const changePageState = (newPageState) => {
    setPageState(newPageState)
  }

  return (
    <div className="App">
      {pageState !== "landing" && <Header />}
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Landing changepage={changePageState} />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/notrelated">
            <NotRelated />
          </Route>
          <Route path="/home/:info">
            <TitleExpandFormat />
          </Route>
        </Switch>
      </AnimatePresence>
      {pageState !== "landing" && <Footer />}
    </div>
  )
}

export default App

