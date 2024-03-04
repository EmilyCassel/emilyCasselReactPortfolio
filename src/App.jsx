import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/Header'
import About from "./components/About"


import Contact from './pages/Contact'
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)


  return (
    <div className={`main-content ${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Portfolio" element={<Portfolio />} />

        </Routes>
      </main>
    </div>
  )
}

export default App