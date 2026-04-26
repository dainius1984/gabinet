import { CalendarCheck2, ExternalLink, MapPin } from 'lucide-react'

const GOOGLE_MAPS_LOCATION_URL = 'https://maps.app.goo.gl/sCujAYXbccwRYajg9'
const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Zygmunta+Krasinskiego+1,+Wroclaw&output=embed'
const BOOKING_URL =
  'https://www.znanylekarz.pl/michal-kasprzyca/psycholog-psychoterapeuta/wroclaw?utm_source=widget-doctor-307228&utm_medium=small&utm_campaign=&utm_content=www-gabinet-psychoterapeutyczny-org.filesusr.com#highlight-calendar'

function FloatingBookingButton() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] lg:inset-x-auto lg:bottom-auto lg:right-5 lg:top-1/2 lg:-translate-y-1/2">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-base font-bold text-white shadow-[0_12px_30px_-12px_rgba(22,163,74,0.9)] ring-2 ring-green-300 transition hover:bg-green-700 hover:ring-green-400 lg:w-auto"
        aria-label="Umow wizyte przez ZnanyLekarz (otworzy sie w nowej karcie)"
      >
        <CalendarCheck2 className="h-5 w-5" aria-hidden="true" />
        Umow wizyte
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  )
}

export default function Footer() {
  return (
    <>
      <FloatingBookingButton />
      <footer
        id="contact"
        className="border-t border-stone-200 bg-stone-50 pb-24 sm:pb-14"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-stone-200 bg-gray-200 shadow-sm">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Mapa Google - Zygmunta Krasinskiego 1, Wroclaw"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-stone-600">
            <MapPin className="h-4 w-4 text-orange-500" aria-hidden="true" />
            <a
              href={GOOGLE_MAPS_LOCATION_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-teal-700 underline-offset-2 transition hover:text-orange-500 hover:underline"
            >
              Zobacz lokalizacje gabinetu w Google Maps
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={GOOGLE_MAPS_LOCATION_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-teal-700 transition hover:border-orange-300 hover:text-orange-500"
            >
              <MapPin className="h-5 w-5 text-teal-700" aria-hidden="true" />
              Nawiguj do gabinetu
            </a>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 text-base font-bold text-white shadow-[0_12px_30px_-12px_rgba(22,163,74,0.9)] ring-2 ring-green-300 transition hover:bg-green-700 hover:ring-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              aria-label="Umow wizyte przez ZnanyLekarz (otworzy sie w nowej karcie)"
            >
              <CalendarCheck2 className="h-5 w-5" aria-hidden="true" />
              Umow wizyte - ZnanyLekarz
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-8 text-center text-sm text-stone-500">
            © {new Date().getFullYear()} Michal Kasprzyca. Wszelkie prawa
            zastrzezone.
          </p>
        </div>
      </footer>
    </>
  )
}
