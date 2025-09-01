import { useState } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        {renderPage(currentPage, setCurrentPage)}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

function renderPage(currentPage, setCurrentPage) {
  switch (currentPage) {
    case 'home':
      return <Home setCurrentPage={setCurrentPage} />
    case 'about':
      return <About />
    case 'services':
      return <Services />
    case 'features':
      return <Features />
    case 'contact':
      return <Contact />
    default:
      return <Home setCurrentPage={setCurrentPage} />
  }
}
