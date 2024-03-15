import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import {Header, Footer} from './components'

import {Contact, Home, Portfolio, About}  from './pages'



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
          <Route path="/Portfolio" element={<Portfolio />} />
        
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App