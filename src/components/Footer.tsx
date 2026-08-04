import { Mail, MapPin, Phone } from 'lucide-react'

const GOOGLE_MAPS_LOCATION_URL = 'https://maps.app.goo.gl/sCujAYXbccwRYajg9'
const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Zygmunta+Krasinskiego+1,+Wroclaw&output=embed'

interface FooterProps {
  showMap?: boolean
}

export default function Footer({ showMap = true }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div
          className={`grid gap-10 lg:gap-12 ${
            showMap ? 'lg:grid-cols-[1.4fr_1fr] lg:items-start' : ''
          }`}
        >
          {showMap && (
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 shadow-sm">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                title="Mapa Google – Zygmunta Krasińskiego 1, Wrocław"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}

          <div className="space-y-8">
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

            <div>
              <p className="font-medium text-teal-700">Gabinet psychoterapeutyczny</p>
              <address className="mt-3 space-y-2 text-sm not-italic text-stone-600">
                <p className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                    aria-hidden="true"
                  />
                  <span>ul. Zygmunta Krasińskiego 1, pokój 503, 50-256 Wrocław</span>
                </p>
              </address>
              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 underline-offset-2 transition hover:text-orange-500 hover:underline"
              >
                Otwórz w Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {year} Gabinet psychoterapeutyczny Michał Kasprzyca. Wszelkie
            prawa zastrzeżone.
          </p>
          <p>
            Projekt i realizacja:{' '}
            <a
              href="https://www.stalowewitryny.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-teal-700"
            >
              Stalowe Witryny – Strony Internetowe Wrocław
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
