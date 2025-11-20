import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
