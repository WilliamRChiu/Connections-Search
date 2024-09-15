import { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import About from './Components/About'
import UserLookup from './Components/UserLookup'
import Footer from './Components/Footer'
import AboutImage from './Components/AboutImage'
import Welcome from './Components/Welcome'
import Connections from './Components/Connections'
import Background1 from './Components/Background1'
import Groq from './Components/Groq'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <Background1/>
      <Welcome/>
      <br/>
      <br/>
      <br/>
      <br/>
      <About/>
      <br/>
      <Connections/>

      <UserLookup/>
      <br/>
      <Groq/>
      <br/>

      
      <Footer/>
      
    </div>
  )
}

export default App
