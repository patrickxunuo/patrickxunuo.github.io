import React from 'react'
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Theline from './components/Theline.js'
import Maincontainer from './components/Maincontainer.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Theline />
      <Maincontainer />
      <Footer />
    </div>
  )
}

export default App

