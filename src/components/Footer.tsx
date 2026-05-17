import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const GOOGLE_MAPS_LOCATION_URL = 'https://maps.app.goo.gl/sCujAYXbccwRYajg9'
const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Zygmunta+Krasinskiego+1,+Wroclaw&output=embed'

const footerNav = [
  { label: 'Strona glowna', href: '/' },
  { label: 'O mnie', href: '/o-mnie' },
  { label: 'Uslugi', href: '/uslugi' },
  { label: 'Cennik', href: '/cennik' },
  { label: 'Strefa zdrowia', href: '/strefa-zdrowia' },
  { label: 'Kontakt', href: '/kontakt' },
] as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:items-start lg:gap-12">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 shadow-sm">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                title="Mapa Google - Zygmunta Krasinskiego 1, Wroclaw"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <address className="mt-4 space-y-2 text-sm not-italic text-stone-600">
              <p className="font-medium text-teal-700">
                Gabinet psychoterapeutyczny
              </p>
              <p className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                  aria-hidden="true"
                />
                <span>ul. Zygmunta Krasinskiego 1, 50-256 Wroclaw</span>
              </p>
              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-teal-700 underline-offset-2 transition hover:text-orange-500 hover:underline"
              >
                Otworz w Google Maps
              </a>
            </address>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <blockquote className="border-l-4 border-orange-200 pl-5">
              <p className="font-serif text-2xl leading-snug text-teal-700 sm:text-3xl">
                Zycie daje kazdemu tyle, ile sam ma odwage sobie z niego wziac.
              </p>
              <footer className="mt-3 text-sm uppercase tracking-[0.16em] text-stone-500">
                — Jacek Walkiewicz
              </footer>
            </blockquote>

            <div className="grid gap-8 sm:grid-cols-2">
              <nav aria-label="Nawigacja w stopce">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  Nawigacja
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {footerNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="text-stone-600 transition hover:text-orange-500"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  Kontakt
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-stone-600">
                  <li>
                    <a
                      href="tel:+48507084352"
                      className="inline-flex items-center gap-2 transition hover:text-orange-500"
                    >
                      <Phone className="h-4 w-4 text-teal-700" aria-hidden="true" />
                      +48 507 084 352
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:kasprzyca@gmail.com"
                      className="inline-flex items-center gap-2 transition hover:text-orange-500"
                    >
                      <Mail className="h-4 w-4 text-teal-700" aria-hidden="true" />
                      kasprzyca@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {year} Gabinet psychoterapeutyczny Michal Kasprzyca. Wszelkie
            prawa zastrzezone.
          </p>
          <p>
            Projekt i realizacja:{' '}
            <a
              href="https://www.stalowewitryny.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-teal-700"
            >
              Stalowe Witryny - Strony Internetowe Wroclaw
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
