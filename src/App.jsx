import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import {Header, Footer} from './components'

import {Contact, Home, Portfolio, About, Resume}  from './pages'



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)


  return (
    <body className={`${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer/>
    </body>
  )
}

export default App