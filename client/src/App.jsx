import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import {Header, Footer} from './components'

import {Home, Portfolio, Resume, AboutMe}  from './pages'



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)


  return (
    <div>
      <body className={`${isDarkMode ? 'dark' : ''}`}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer/>
      </body>
    </div>
  )
}

export default App