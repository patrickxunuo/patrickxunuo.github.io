import React from 'react'
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Theline from './components/Theline.js'
import Maincontainer from './components/Maincontainer.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Theline />
        <Maincontainer />
        <Footer />
      </div>
    </Router>
  )
}

export default App

