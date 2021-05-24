import React from 'react'
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Maincontainer from './components/Maincontainer.js'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Maincontainer />
      <Footer />
    </div>
  )
}

export default App

