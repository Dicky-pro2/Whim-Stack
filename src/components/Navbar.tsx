import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const NAV_ITEMS = ['About', 'Services', 'Projects', 'Stack', 'Contact']

const WHATSAPP_URL =
  "https://wa.me/2349162869066?text=Hi%20Dickson%2C%20I%27d%20like%20to%20work%20with%20you!"

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return true
  })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#090909]/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        
         <a href="#"
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-xl font-bold italic text-gray-900 dark:text-[#F2EDE4] tracking-tight select-none"
        >
          Whim<span className="text-[#FF5C2B] not-italic">.</span>Stack
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              
              <a  href={`#${item.toLowerCase()}`}
                className="text-[0.78rem] tracking-[0.1em] uppercase font-medium text-gray-500 dark:text-[#A09B92] hover:text-gray-900 dark:hover:text-[#F2EDE4] transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side — theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-1.5 text-[0.72rem] tracking-[0.1em] uppercase font-medium text-gray-500 dark:text-[#A09B92] border border-black/10 dark:border-white/10 px-3 py-2 rounded-full hover:border-black/20 dark:hover:border-white/20 transition-all duration-200"
          >
            {darkMode ? <Sun size={13} /> : <Moon size={13} />}
            {darkMode ? 'Light' : 'Dark'}
          </button>

          {/* WhatsApp CTA */}
          
           <a href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.08em] uppercase font-semibold text-white bg-[#FF5C2B] px-5 py-2.5 rounded-full hover:bg-[#e84e20] hover:shadow-[0_4px_20px_rgba(255,92,43,0.4)] transition-all duration-200"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contact me
          </a>
        </div>

        {/* Mobile — theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-gray-500 dark:text-[#A09B92] hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-gray-700 dark:text-[#F2EDE4] hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0d0d0d] border-t border-black/[0.06] dark:border-white/[0.06] px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            
             <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-[0.1em] uppercase font-medium text-gray-600 dark:text-[#A09B92] hover:text-[#FF5C2B] dark:hover:text-[#FF5C2B] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          
           <a href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-[0.78rem] tracking-[0.08em] uppercase font-semibold text-white bg-[#FF5C2B] px-5 py-3 rounded-full mt-2 transition-all duration-200"
          >
            Contact me
          </a>
        </div>
      )}
    </nav>
  )
}