import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/sections/Navbar'
import Footer from './components/sections/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import FloatingAIAssistant from './components/ui/FloatingAIAssistant'

// Sub-pages for Services
import WebDev from './pages/services/WebDev'
import AIAgents from './pages/services/AIAgents'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen bg-background text-softText selection:bg-primaryGlow selection:text-black">
        <Navbar />

        <div className="pt-0"> {/* Adjusted to allow Hero to be full screen or follow navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-dev" element={<WebDev />} />
            <Route path="/services/ai-agents" element={<AIAgents />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <FloatingAIAssistant />
        <Footer />
      </main>
    </Router>
  )
}

export default App
