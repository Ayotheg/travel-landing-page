import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Section from './Section.jsx'
import Card from './Card.jsx'

function App() {
  return (
    <>
     <Navbar />
     <Hero />
     <Section />
     <Card />
    </>
  )
}

export default App
