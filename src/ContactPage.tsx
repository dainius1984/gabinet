import { useState } from 'react'
import { CalendarCheck2, Mail, MapPin, Phone, UserRound } from 'lucide-react'
import { Footer, Header } from './HomePage'

const BOOKING_URL =
  'https://www.znanylekarz.pl/michal-kasprzyca/psycholog-psychoterapeuta/wroclaw?utm_source=widget-doctor-307228&utm_medium=small&utm_campaign=&utm_content=www-gabinet-psychoterapeutyczny-org.filesusr.com#highlight-calendar'
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/sCujAYXbccwRYajg9'

export default function ContactPage() {
  const [isProfileImageMissing, setIsProfileImageMissing] = useState(false)

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
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-[400px] items-center justify-center rounded-2xl bg-gray-200 px-6 text-center text-lg text-stone-600 shadow-sm transition hover:bg-gray-300"
              aria-label="Mapa Google - Zygmunta Krasinskiego 1, Wroclaw"
            >
              Mapa Google - Zygmunta Krasinskiego 1, Wroclaw
            </a>
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

        <section className="bg-stone-50 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-xl border border-teal-200 bg-stone-100">
                    {isProfileImageMissing ? (
                      <div className="flex h-full w-full items-center justify-center">
                        <UserRound
                          className="h-9 w-9 text-stone-400"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <img
                        src="/img/1.jpg"
                        alt="Michal Kasprzyca"
                        className="h-full w-full object-cover"
                        onError={() => setIsProfileImageMissing(true)}
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-serif text-xl text-teal-700">
                      Gotowy na pierwszy krok?
                    </p>
                    <p className="mt-1 text-stone-600">
                      Umow wizyte przez ZnanyLekarz.
                    </p>
                  </div>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                  <CalendarCheck2 className="h-5 w-5" aria-hidden="true" />
                  Umow wizyte przez ZnanyLekarz
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
