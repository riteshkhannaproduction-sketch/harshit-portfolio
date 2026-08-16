'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Testimonials', 'Contact']

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative">
          {/* Logo */}
          <Link
            href="#home"
            className="font-black text-lg sm:text-xl tracking-tight text-dark-900 z-50"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            HK<span className="text-lime-400">©</span>
          </Link>

          {/* Desktop Nav pill */}
          <div className="hidden md:flex items-center gap-1 bg-black rounded-full px-3 py-2 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white hover:bg-lime-400 hover:text-black px-3 lg:px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA — desktop */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-lime-400 text-black px-4 lg:px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all duration-200 z-50"
          >
            Hire Me <span>→</span>
          </a>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden relative z-50 flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-black'}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0 bg-white' : 'bg-black'}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-black'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-black text-white flex flex-col justify-center px-8 transition-all duration-400 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 mt-16">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-4xl font-black hover:text-lime-400 transition-colors tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
              }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 bg-lime-400 text-black px-7 py-4 rounded-full text-base font-semibold hover:bg-white transition-colors"
          >
            Hire Me →
          </a>
        </div>

        <p className="mt-8 text-white/30 text-sm">© Harshit Kaul 2024</p>
      </div>
    </>
  )
}
