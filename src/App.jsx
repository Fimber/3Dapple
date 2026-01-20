import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import IPhonePage from './pages/IPhonePage'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <Router>
      <main>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mac" element={<Home />} />
          <Route path="/iphone" element={<IPhonePage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
