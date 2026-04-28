import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import HealthZonePage from './HealthZonePage'
import HomePage from './HomePage'
import PricingPage from './PricingPage'
import ServicesPage from './ServicesPage'

function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const targetId = hash.slice(1)
    let attempt = 0
    let rafId = 0
    const maxAttempts = 30

    const scrollToTarget = () => {
      const targetElement = document.getElementById(targetId)
      if (!targetElement) {
        attempt += 1
        if (attempt < maxAttempts) {
          rafId = window.requestAnimationFrame(scrollToTarget)
        }
        return
      }

      const headerHeight = document.querySelector('header')?.clientHeight ?? 0
      const targetTop = targetElement.getBoundingClientRect().top + window.scrollY
      const topWithOffset = Math.max(targetTop - headerHeight - 12, 0)
      window.scrollTo({ top: topWithOffset, behavior: 'smooth' })
    }

    rafId = window.requestAnimationFrame(scrollToTarget)
    return () => window.cancelAnimationFrame(rafId)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-mnie" element={<AboutPage />} />
        <Route path="/uslugi" element={<ServicesPage />} />
        <Route path="/cennik" element={<PricingPage />} />
        <Route path="/strefa-zdrowia" element={<HealthZonePage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
