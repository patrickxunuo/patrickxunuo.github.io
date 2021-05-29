import React from 'react'
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import BackgroundSvg from './components/BackgroundSvg.js'
import Maincontainer from './components/Maincontainer.js'

function App() {
  return (
    <div className="App">
      <Header />
      <BackgroundSvg />
      <Maincontainer />
      <Footer />
    </div>
  )
}

export default App

