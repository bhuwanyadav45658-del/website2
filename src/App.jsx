import { useEffect } from 'react'
import Hero from './components/sections/Hero'
import WhatIsAI from './components/sections/WhatIsAI'
import HowItWorks from './components/sections/HowItWorks'
import Benefits from './components/sections/Benefits'
import CTA from './components/sections/CTA'

function App() {
  // Simple smooth scroll behavior for anchor links if we had them
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <main className="min-h-screen bg-background text-softText selection:bg-primaryGlow selection:text-black">
      <Hero />
      <WhatIsAI />
      <HowItWorks />
      <Benefits />
      <CTA />

      {/* Simple Footer */}
      <footer className="py-8 text-center text-softText/40 text-sm border-t border-white/5">
        <p>© 2024 100xSolution. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
