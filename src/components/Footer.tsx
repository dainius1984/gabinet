import { MapPin } from 'lucide-react'

const GOOGLE_MAPS_LOCATION_URL = 'https://maps.app.goo.gl/sCujAYXbccwRYajg9'
const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Zygmunta+Krasinskiego+1,+Wroclaw&output=embed'
export default function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-200 bg-stone-50">
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

          <p className="mt-8 text-center text-sm text-stone-500">
            © {new Date().getFullYear()} Michal Kasprzyca. Wszelkie prawa
            zastrzezone.
          </p>
      </div>
    </footer>
  )
}
