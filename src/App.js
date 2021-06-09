import React, { useState } from 'react'
import './App.css'
import Landing from './pages/Landing.js'
import Home from './pages/Home.js'
import Loader from './components/Loader'
import NotRelated from './pages/NotRelated'
import TitleExpandFormat from './components/TitleExpandFormat'
import Header from './components/Header'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Switch, Route, Link, useLocation } from "react-router-dom"


function App() {
  const location = useLocation()

  let initialpage = "landing"
  if (location.pathname !== "/")
    initialpage = "home"

  const [pageState, setPageState] = useState(initialpage)

  const changePageState = (newPageState) => {
    setPageState(newPageState)
  }

  return (
    <div className="App">
     <Loader />
      {pageState !== "landing" && <Header changepage={changePageState}/>}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Landing changepage={changePageState} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/internship">
            <TitleExpandFormat title={"internship"} />
          </Route>
          <Route path="/project">
            <TitleExpandFormat title={"project"} />
          </Route>
          <Route path="/contact">
            <TitleExpandFormat title={"contact"} />
          </Route>
          <Route exact path="/notrelated">
            <NotRelated changepage={changePageState}/>
          </Route>
        </Switch>
      </AnimatePresence>
      {(pageState === "home") && <Footer key="footer"/>}
    </div>
  )
}

export default App

