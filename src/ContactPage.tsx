import { Mail, MapPin, Phone } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/sCujAYXbccwRYajg9'
const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Zygmunta+Krasinskiego+1,+Wroclaw&output=embed'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-700">
      <Header />

      <main>
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-center font-serif text-4xl text-teal-700 sm:text-5xl">
              Kontakt
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-stone-600 sm:text-lg">
              Zapraszam do kontaktu telefonicznego lub mailowego w celu umowienia
              wizyty.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm">
                <Mail className="mx-auto h-6 w-6 text-teal-700" aria-hidden="true" />
                <h2 className="mt-3 font-serif text-xl text-teal-700">E-mail</h2>
                <a
                  href="mailto:kasprzyca@gmail.com"
                  className="mt-2 inline-block text-stone-700 transition hover:text-orange-500"
                >
                  kasprzyca@gmail.com
                </a>
              </article>

              <article className="rounded-xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm">
                <Phone className="mx-auto h-6 w-6 text-teal-700" aria-hidden="true" />
                <h2 className="mt-3 font-serif text-xl text-teal-700">Telefon</h2>
                <a
                  href="tel:+48507084352"
                  className="mt-2 inline-block text-stone-700 transition hover:text-orange-500"
                >
                  +48 507 084 352
                </a>
              </article>

              <article className="rounded-xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm">
                <MapPin className="mx-auto h-6 w-6 text-teal-700" aria-hidden="true" />
                <h2 className="mt-3 font-serif text-xl text-teal-700">Lokalizacja</h2>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-stone-700 transition hover:text-orange-500"
                >
                  Zygmunta Krasinskiego 1, Wroclaw
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl text-teal-700 sm:text-3xl">
              Jak dojechac?
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              Gabinet miesci sie w centrum Wroclawia blisko Galerii Dominikanskiej
              na tylach hotelu Hilton przy ulicy Krasinskiego 1. Pietro 5, pokoj
              503, korytarz na prawo od windy.
            </p>

            <div className="mt-6 rounded-xl border border-orange-200 bg-white px-5 py-4">
              <p className="leading-relaxed text-stone-700">
                Numer rachunku bankowego: 17 1140 2004 0000 3702 7584 0360
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-gray-200 shadow-sm">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                title="Mapa Google - Zygmunta Krasinskiego 1, Wroclaw"
                className="h-[400px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 text-center">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-teal-700 underline-offset-2 transition hover:text-orange-500 hover:underline"
              >
                Otworz lokalizacje w Google Maps
              </a>
            </div>
          </div>
        </section>

        <section className="bg-teal-700 py-6">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 text-white sm:px-6 md:grid-cols-3 lg:px-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <span>Zygmunta Krasinskiego 1, Wroclaw</span>
            </div>
            <a
              href="tel:+48507084352"
              className="flex items-center gap-2 transition hover:text-orange-200"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>+48 507 084 352</span>
            </a>
            <a
              href="mailto:kasprzyca@gmail.com"
              className="flex items-center gap-2 transition hover:text-orange-200"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>kasprzyca@gmail.com</span>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
