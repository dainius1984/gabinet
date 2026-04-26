import { useEffect, useRef, useState } from 'react'
import { Feather, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface NavItem {
  label: string
  href: string
  kind: 'route' | 'hash'
}

const navItems: NavItem[] = [
  { label: 'Strona glowna', href: '/', kind: 'route' },
  { label: 'O mnie', href: '/o-mnie', kind: 'route' },
  { label: 'Uslugi', href: '/uslugi', kind: 'route' },
  { label: 'Cennik', href: '/cennik', kind: 'route' },
  { label: 'Strefa zdrowia', href: '/strefa-zdrowia', kind: 'route' },
  { label: 'Kontakt', href: '/kontakt', kind: 'route' },
]

function isNavItemActive(
  item: NavItem,
  pathname: string,
  hash: string,
): boolean {
  if (item.kind === 'route') {
    return pathname === item.href
  }

  const [itemPath, itemHash] = item.href.split('#')
  const normalizedPath = itemPath || '/'
  return pathname === normalizedPath && hash === `#${itemHash}`
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const location = useLocation()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      const isNearTop = currentY < 24

      if (isNearTop) {
        setIsNavVisible(true)
        lastScrollYRef.current = currentY
        return
      }

      if (currentY > lastScrollYRef.current + 6) {
        setIsNavVisible(false)
      } else if (currentY < lastScrollYRef.current - 6) {
        setIsNavVisible(true)
      }

      lastScrollYRef.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-stone-100 bg-white/95 backdrop-blur transition-transform duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-700 text-xs font-bold tracking-wide text-white">
              MK
            </div>
            <div className="min-w-0">
              <p className="truncate font-serif text-base text-teal-700 sm:text-lg">
                Michal Kasprzyca
              </p>
              <p className="hidden text-xs text-stone-500 sm:block">
                Psycholog i psychoterapeuta
              </p>
            </div>
          </Link>

          <nav aria-label="Nawigacja glowna" className="hidden md:block">
            <ul className="flex flex-wrap items-center gap-1.5">
              {navItems.map((item) => {
                const isActive = isNavItemActive(
                  item,
                  location.pathname,
                  location.hash,
                )
                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`inline-flex rounded-md px-3 py-1.5 text-sm font-medium transition ${
                        isActive
                          ? 'bg-orange-500 text-white shadow-sm'
                          : 'text-stone-700 hover:bg-stone-100'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 text-sm text-teal-700 lg:flex">
            <Feather className="h-4 w-4" aria-hidden="true" />
            <a
              href="tel:+48507084352"
              className="font-semibold transition hover:text-orange-500"
            >
              +48 507 084 352
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center rounded-lg border border-stone-200 p-2 text-stone-700 transition hover:bg-stone-100 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Przelacz menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-200 md:hidden ${
            isMobileMenuOpen ? 'max-h-[420px] pb-3' : 'max-h-0'
          }`}
        >
          <div className="mb-3 flex items-center gap-2 text-sm text-teal-700">
            <Feather className="h-4 w-4" aria-hidden="true" />
            <a href="tel:+48507084352" className="font-semibold">
              +48 507 084 352
            </a>
          </div>
          <nav aria-label="Nawigacja mobilna">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = isNavItemActive(
                  item,
                  location.pathname,
                  location.hash,
                )
                return (
                  <li key={`mobile-${item.label}`}>
                    <Link
                      to={item.href}
                      className={`block rounded-md px-3 py-2 text-sm font-medium ${
                        isActive
                          ? 'bg-orange-500 text-white'
                          : 'text-stone-700 hover:bg-stone-100'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
